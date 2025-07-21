#!/usr/bin/env bash
# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Collect static files
python manage.py migrate --noinput
python manage.py collectstatic --noinput