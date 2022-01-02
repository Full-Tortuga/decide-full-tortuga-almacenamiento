from django.urls import path, include
from . import views

urlpatterns = [
    #It isn already implemented in the views.py
    path('', views.index),
]