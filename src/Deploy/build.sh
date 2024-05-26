#!/usr/bin/env bash
# exit on error
set -o errexit

cd src/Deploy #navigate to deploy for requirements

pip install -r requirements.txt

cd.. #back to src, getting out of deploy
cd BackEnd

python manage.py collectstatic --no-input
python manage.py migrate