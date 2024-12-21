FROM python

WORKDIR /app
COPY ./app.py /app/app.py

RUN pip install redis
RUN pip install pika

CMD ["python", "app.py"]