from django.db import models

# Create your models here.
class SensorData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Temperature: {self.temperature}, Humidity: {self.humidity}, Created At: {self.created_at}'