from django.urls import path
from . import views
urlpatterns = [
    path('predict/', views.predict, name='predict'),
    path('predict', views.predict, name='predict2'),
    path('domains/', views.domains, name='domains'),
    path('domains', views.domains, name='domains2'),
    path('resources/', views.resources_view, name='resources'),
    path('resources', views.resources_view, name='resources2'),
    path('feedback/', views.feedback_view, name='feedback'),
    path('feedback', views.feedback_view, name='feedback2'),
    path('chat/', views.chat, name='chat'),
    path('chat', views.chat, name='chat2'),
    path('vault/', views.vault_view, name='vault'),
    path('vault', views.vault_view, name='vault2'),
]
