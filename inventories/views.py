
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Inventory
from .serializers import InventorySerializer
from django.shortcuts import redirect

def root_redirect_view(request):
    return redirect('/api/inventories/')



class InventoryListView(ListAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class InventoryDetailView(RetrieveAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
