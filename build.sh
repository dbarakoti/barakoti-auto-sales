#!/usr/bin/env bash
# build.sh
python manage.py migrate --noinput
python manage.py collectstatic --noinput
