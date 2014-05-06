from django.conf.urls import patterns, include, url


from django.contrib import admin
import main.views

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     url(r'^$', main.views.HomeView.as_view(), name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
