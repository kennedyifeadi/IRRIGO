from django.urls import path
from . import views

urlpatterns = [
    path('receive-data/', views.receive_sensor_data, name='receive_sensor_data'),
]
