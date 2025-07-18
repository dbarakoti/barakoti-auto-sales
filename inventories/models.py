from django.db import models


class Inventory(models.Model):
    stock = models.IntegerField()
    make = models.CharField(max_length=64)
    model = models.CharField(max_length=128)
    trim = models.CharField(max_length=32)
    year = models.IntegerField()
    price = models.FloatField()
    exterior_color = models.CharField(max_length=265)
    vin =  models.CharField(max_length=256)
    mileage = models.IntegerField()
    has_carfax = models.BooleanField(default=False)
    fuel_efficiency =  models.CharField(max_length=64)
    drivetrain = models.CharField(max_length=64)
    image_url = models.CharField(max_length=2083)
    date_arrived = models.DateField(auto_now_add=True)


class InventoryImage(models.Model):
    inventory = models.ForeignKey(Inventory, related_name='images', on_delete=models.CASCADE)
    image_url = models.URLField()
    image_type = models.CharField(max_length=32, choices=(('interior', 'Interior'), ('exterior', 'Exterior')))