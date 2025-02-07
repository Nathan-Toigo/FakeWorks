FROM python:3.11-slim

ARG RABBITMQ_HOST
ARG REDIS_HOST
ENV RABBITMQ_HOST=${RABBITMQ_HOST}
ENV REDIS_HOST=${REDIS_HOST}

WORKDIR /app
COPY ./app.py /app/app.py

RUN pip install redis
RUN pip install pika

CMD ["python", "app.py"]