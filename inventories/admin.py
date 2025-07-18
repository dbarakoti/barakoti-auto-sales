from django.contrib import admin
from .models import Inventory, InventoryImage


class InventoryImageInline(admin.TabularInline):
    model = InventoryImage
    extra = 1
    readonly_fields = ['image_preview']

    def image_preview(self, obj):
        if obj.image_url:
            return f'<img src="{obj.image_url}" style="height: 100px;" />'
        return "-"
    image_preview.allow_tags = True
    image_preview.short_description = "Preview"



class InventoryAdmin(admin.ModelAdmin):
    list_display = ('stock','make', 'model', 'trim', 'has_carfax', 'year', 'price', 'exterior_color', 'mileage', 'fuel_efficiency','drivetrain')
    inlines = [InventoryImageInline]

admin.site.register(Inventory, InventoryAdmin)
