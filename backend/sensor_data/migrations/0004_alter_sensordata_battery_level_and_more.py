# Generated by Django 5.1.2 on 2024-11-15 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sensor_data', '0003_delete_hardwaredata_sensordata_battery_level_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sensordata',
            name='battery_level',
            field=models.FloatField(default=75.0),
        ),
        migrations.AlterField(
            model_name='sensordata',
            name='humidity',
            field=models.FloatField(default=50.0),
        ),
        migrations.AlterField(
            model_name='sensordata',
            name='soil_moisture',
            field=models.FloatField(default=30.0),
        ),
        migrations.AlterField(
            model_name='sensordata',
            name='temperature',
            field=models.FloatField(default=25.0),
        ),
        migrations.AlterField(
            model_name='sensordata',
            name='water_level',
            field=models.FloatField(default=50.0),
        ),
    ]
