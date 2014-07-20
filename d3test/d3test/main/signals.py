from django.contrib.auth.models import User
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from rest_framework.utils import encoders
from ws4redis.publisher import RedisPublisher
from ws4redis.redis_store import RedisMessage


@receiver([post_save, post_delete], sender=User)
def on_userlist_change(sender, **kwargs):
    from .rest import UserViewSet

    redis_publisher = RedisPublisher(facility='foobar', broadcast=True)

    # a bit of a kludge, but doing so we easily send the list in the exact same format for convenience
    user_view_set = UserViewSet()
    user_list = user_view_set.serializer_class(User.objects.all(), many=True).data
    json = encoders.JSONEncoder().encode(user_list)
    redis_publisher.publish_message(RedisMessage(json))