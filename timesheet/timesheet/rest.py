from django.contrib.auth.models import User, Group
from rest_framework import viewsets, routers

# ViewSets define the view behavior.
from rest_framework import serializers


class IdModelViewSet(viewsets.ModelViewSet):
    def serializer_class(self, *args, **kwargs):
        class DefaultSerializerClass(serializers.ModelSerializer):
            id = serializers.Field()

            class Meta:
                model = self.model
        return DefaultSerializerClass(*args, **kwargs)


class UserViewSet(IdModelViewSet):
    model = User

class GroupViewSet(IdModelViewSet):
    model = Group


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)