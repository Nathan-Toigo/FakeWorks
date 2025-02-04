FROM python:3.11-slim AS base
ARG APP_PORT=80
ARG RABBIT_HOST
ARG REDIS_HOST
ENV APP_PORT=${APP_PORT}
ENV RABBIT_HOST=${RABBIT_HOST}
ENV REDIS_HOST=${REDIS_HOST}
ENV PYTHONPATH=/app/src
WORKDIR /app
COPY ./pyproject.toml /app/pyproject.toml
COPY ./src /app/src/
RUN pip install waitress flask-restful redis pika flask-cors
EXPOSE 80
CMD waitress-serve --port=${APP_PORT} --call src.app:create_app