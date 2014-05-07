from django.views.generic import TemplateView
from ws4redis.publisher import RedisPublisher
import json

class HomeView(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        people = [{'name': 'toto'}, {'name': 'riri'}]
        RedisPublisher(facility='foobar', broadcast=True).publish_message(json.dumps(people))
        return super(HomeView, self).get(request, *args, **kwargs)
