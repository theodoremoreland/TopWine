FROM python:3.8-slim-buster

WORKDIR /application

COPY application/ ./
RUN pip install -r requirements.txt

CMD [ "python", "application.py" ]