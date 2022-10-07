from unicodedata import name
from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('newposts/<int:start>to<int:end>', views.newposts, name='newposts')
   
]