from rest_framework import serializers
from .models import Inventory, InventoryImage

class InventoryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryImage
        fields = ['image_url', 'image_type']

class InventorySerializer(serializers.ModelSerializer):
    images = InventoryImageSerializer(many=True, read_only=True)

    class Meta:
        model = Inventory
        fields = '__all__'