web: npm start --prefix react_django/react-src
release: python manage.py migrate
web: gunicorn --pythonpath django-src django-src.wsgi