from django.urls import path
from .views import health_check
from .views import InventoryListView, InventoryDetailView, ContactUsMessageView


urlpatterns = [
    path('inventory/', InventoryListView.as_view(), name='inventory-list'),
    path('inventory/<int:pk>/', InventoryDetailView.as_view(), name='inventory-detail'),
    path('contact/', ContactUsMessageView.as_view(), name='contact'),
    path("api/health/", health_check)
]