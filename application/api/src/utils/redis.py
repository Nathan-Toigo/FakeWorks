import redis
import os

REDIS_HOST = os.getenv('REDIS_HOST', 'redis')
REDIS_PORT = os.getenv('REDIS_PORT', '6379')

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=0, decode_responses=True)