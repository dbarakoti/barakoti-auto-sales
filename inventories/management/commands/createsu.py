from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    def handle(self, *args, **options):
        User = get_user_model()
        try:
            User.objects.get(username='admin').delete()
            self.stdout.write(self.style.WARNING('Existing user deleted.'))
        except User.DoesNotExist:
            pass

        User.objects.create_superuser('admin', 'admin@example.com', 'SecurePass123!')
        self.stdout.write(self.style.SUCCESS('Superuser created.'))
