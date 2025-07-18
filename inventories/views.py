
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Inventory
from .serializers import InventorySerializer


class InventoryListView(ListAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class InventoryDetailView(RetrieveAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
