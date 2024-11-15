from rest_framework import serializers
from .models import SensorData

class SensorDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = ['temperature', 'humidity', 'soil_moisture', 'battery_level', 'water_level', 'created_at']
        read_only_fields = ['created_at']

