
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from .models import Inventory
from .serializers import InventorySerializer
from django.shortcuts import redirect
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import EmailMessage, get_connection
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

def root_redirect_view(request):
    return redirect('/api/inventory/')

class InventoryListView(ListAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class InventoryDetailView(RetrieveAPIView):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

class ContactUsMessageView(APIView):
    def post(self, request):
        data = request.data

        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        message = data.get('message')

        if not all([first_name, last_name, email, message]):
            return Response({'error': 'All fields are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            validate_email(email)
        except ValidationError:
            return Response({'error': 'Invalid email address.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            email_message = EmailMessage(
                subject=f"New Contact Message from {first_name} {last_name}",
                body=f"Sender Email: {email}\n\n{message}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[settings.DEFAULT_FROM_EMAIL],
                headers={'Reply-To': email}
            )

            with get_connection(
                host=settings.EMAIL_HOST,
                port=settings.EMAIL_PORT,
                username=settings.EMAIL_HOST_USER,
                password=settings.EMAIL_HOST_PASSWORD,
                use_tls=settings.EMAIL_USE_TLS,
                use_ssl=settings.EMAIL_USE_SSL,
                ssl_context=settings.EMAIL_SSL_CONTEXT,
                fail_silently=False
            ) as connection:
                email_message.connection = connection
                email_message.send(fail_silently=False)

            logger.info("Contact email sent successfully")
            return Response({'message': 'Message sent successfully'}, status=status.HTTP_200_OK)

        except Exception as e:
            logger.exception("Exception when sending contact email")
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)