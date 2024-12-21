FROM python

WORKDIR /app
COPY ./app.py /app/app.py

RUN pip install flask-restful
RUN pip install redis
RUN pip install pika

EXPOSE 5000
CMD ["python", "app.py"]