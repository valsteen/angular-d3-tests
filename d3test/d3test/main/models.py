from django.contrib.auth.models import User
import signals  # just make sure signals are loaded at the right moment
from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()

    def __unicode__(self):
        return self.name


class Activity(models.Model):
    name = models.CharField(max_length=30)

    def __unicode__(self):
        return self.name


class UserActivity(models.Model):
    user = models.ForeignKey(User)
    project = models.ForeignKey(Project)
    activity = models.ForeignKey(Activity)
    time_spent = models.FloatField()
    activity_date = models.DateField()