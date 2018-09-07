from django.conf import settings
from django.views.static import serve
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path('^(?!api/|media/)(\w+\/+)*', TemplateView.as_view(template_name='index.html')),
    path('api/', include('django_app.urls'))
]

if settings.DEBUG:
    urlpatterns += [
        re_path('media/(?P<path>images/.*)', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
    ]