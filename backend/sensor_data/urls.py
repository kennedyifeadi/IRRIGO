from django.urls import path
from .views import receive_sensor_data, SensorDataView

urlpatterns = [
    path('api/receive-sensor-data/', receive_sensor_data, name='receive_sensor_data'),
    path('api/sensor-data/', SensorDataView.as_view(), name='sensor_data'),
]
