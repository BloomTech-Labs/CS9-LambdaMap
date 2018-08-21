import jwt, datetime
from decouple import config

secret = config('SECRET')


def create_token():
    return jwt.encode({'exp': datetime.utcnow()}, secret, algorithms='HS256')


def verify_token(jwt_key):
    try:
        return jwt.decode(jwt_key, secret, algorithms=['HS256'])
    except jwt.ExpiredSignatureError as e:
        return e
