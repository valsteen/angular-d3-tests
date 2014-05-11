from django.conf.urls import patterns, include, url
from django.contrib import admin
import main.views
from .rest import *

admin.autodiscover()

urlpatterns = patterns('',
                       # Examples:
                       url(r'^$', main.views.HomeView.as_view(), name='home'),
                       url(r'^api/', include(router.urls)),
                       url(r'^api/api-auth/', include('rest_framework.urls', namespace='rest_framework')),
                       url(r'^admin/', include(admin.site.urls)),
)
