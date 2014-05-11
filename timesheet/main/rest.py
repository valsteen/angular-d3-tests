from django.contrib.auth.models import User, Group
from rest_framework import viewsets, routers

# ViewSets define the view behavior.
from rest_framework import serializers
from main.models import Project, Activity, UserActivity


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


class ProjectViewSet(IdModelViewSet):
    model = Project


class ActivityViewSet(IdModelViewSet):
    model = Activity


class UserActivitySerializer(serializers.ModelSerializer):
    id = serializers.Field()

    class Meta:
        depth = 1
        model = UserActivity


class UserActivityViewSet(IdModelViewSet):
    serializer_class = UserActivitySerializer
    model = UserActivity

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'useractivities', UserActivityViewSet)
router.register(r'project', ProjectViewSet)
