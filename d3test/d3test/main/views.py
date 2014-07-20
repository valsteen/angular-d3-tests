from django.views.generic import TemplateView
from ws4redis.publisher import RedisPublisher
import json
from ws4redis.redis_store import RedisMessage


class HomeView(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        people = [{'name': 'toto'}, {'name': 'riri'}]
        RedisPublisher(facility='foobar', broadcast=True).publish_message(RedisMessage(json.dumps(people)))
        return super(HomeView, self).get(request, *args, **kwargs)
