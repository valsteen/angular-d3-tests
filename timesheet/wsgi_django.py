#!/usr/bin/env python
import os
os.environ.update(DJANGO_SETTINGS_MODULE='timesheet.settings.local')
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
