from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #  You might have other Django-handled URLs here, but
    #  for a single-page React app, you often just need this one.
]