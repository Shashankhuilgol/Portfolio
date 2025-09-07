from django.urls import path
from Base import views

urlpatterns = [
    path('', views.contact, name='contact'),  # homepage
    path('experience/', views.experience, name='experience'),  # experience list page
    path('experience/itc/', views.itc, name='itc'),  # ITC page
    path('experience/runshaw/', views.runshaw, name='runshaw'),  # Runshaw page
]