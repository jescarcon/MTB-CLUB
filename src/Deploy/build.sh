#!/usr/bin/env bash
# exit on error
set -o errexit

cd .. #Default route at BackEnd
cd /Deploy #Navigate Deploy

pip install -r requirements.txt

cd .. #Default route at BackEnd
cd /BackEnd #Continue at BackEnd

python manage.py collectstatic --no-input
python manage.py migrate