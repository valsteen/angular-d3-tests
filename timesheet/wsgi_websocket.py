import os
import gevent.monkey
import gevent.socket
import redis.connection
redis.connection.socket = gevent.socket
os.environ.update(DJANGO_SETTINGS_MODULE='timesheet.settings.local')
from ws4redis.uwsgi_runserver import uWSGIWebsocketServer
application = uWSGIWebsocketServer()
