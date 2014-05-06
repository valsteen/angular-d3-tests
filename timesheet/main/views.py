from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = 'index.html'

    # def get(self, request, *args, **kwargs):
    #     #RedisPublisher(facility='foobar', broadcast=True).publish_message('Hello everybody')  # send a welcome message to everybody
    #     return super(BroadcastChatView, self).get(request, *args, **kwargs)
