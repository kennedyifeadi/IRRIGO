from django.db import models

# Create your models here.
class SensorData(models.Model):
    temperature = models.FloatField()
    humidity = models.FloatField()
    soil_moisture = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    battery_level = models.FloatField()
    water_level = models.FloatField()
    def __str__(self):
        return f'Temperature: {self.temperature}, Humidity: {self.humidity}%, Soil Moisture: {self.soil_moisture}% , Created At: {self.created_at}, , Battery level: {self.battery_level}, Water level: {self.water_level}'
    
class Location(models.Model):
    name = models.CharField(max_length=50)
    latitude= models.DecimalField(max_digits= 10, decimal_places= 6)
    longitude = models.DecimalField(max_digits=10, decimal_places= 6)
    updated_at = models.DateTimeField(auto_now= True)

    def __str__(self):
        return f'{self.name} ({self.latitude}, {self.longitude})'if self.name else f'Location, ({self.latitude}, {self.longitude})'

