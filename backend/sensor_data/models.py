from django.db import models

# Create your models here.
class SensorData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()
    soil_moisture = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Temperature: {self.temperature}, Humidity: {self.humidity}%, Soil Moisture: {self.soil_moisture}% , Created At: {self.created_at}'