# Generated by Django 5.1.5 on 2025-07-10 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Inventory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.IntegerField()),
                ('make', models.CharField(max_length=64)),
                ('model', models.CharField(max_length=128)),
                ('trim', models.CharField(max_length=32)),
                ('year', models.IntegerField()),
                ('price', models.FloatField()),
                ('exterior_color', models.CharField(max_length=265)),
                ('vin', models.CharField(max_length=256)),
                ('mileage', models.IntegerField()),
                ('has_carfax', models.BooleanField(default=False)),
                ('fuel_efficiency', models.CharField(max_length=64)),
                ('drivetrain', models.CharField(max_length=64)),
                ('image_url', models.CharField(max_length=2083)),
            ],
        ),
    ]
