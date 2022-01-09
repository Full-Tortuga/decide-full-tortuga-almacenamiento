FROM ubuntu

RUN apt update
RUN apt install -y python3.8
RUN apt-get -y install python3-pip
RUN apt-get -y install git
RUN apt -y install libpq-dev python3-dev
RUN apt install -y git gcc libc-dev
RUN apt install -y gcc g++ make libffi-dev python3-dev
RUN whereis python3
RUN ln -s /usr/bin/python3 /usr/bin/python
RUN apt-get install -y build-essential

RUN pip install gunicorn
RUN pip install ipdb
RUN pip install ipython
RUN pip install wheel
RUN pip install psycopg2-binary

WORKDIR /app

RUN git clone https://github.com/Full-Tortuga/decide-full-tortuga-almacenamiento.git .
RUN pip install -r requirements.txt

WORKDIR /app/decide

CMD ./manage.py runserver 0.0.0.0:8000 --settings=decide.test_settings