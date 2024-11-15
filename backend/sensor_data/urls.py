from django.urls import path
from .views import receive_sensor_data

urlpatterns = [
    path('receive-data/', receive_sensor_data, name='receive_sensor_data'),
]
