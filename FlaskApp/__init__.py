import psycopg2
from flask import Flask
import json
# If you get an error on the next line on Python 3.4.0, change to: Flask('app')
# where app matches the name of this file without the .py extension.
app = Flask(__name__)

@app.route("/distaster/<name>")
def hello(name):
    # Get data from SQL Server
    data = {'lat':159.553, 'long':35.244,'inventory':{'medical':3}}
    return json.dumps(data)

# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app

if __name__ == '__main__':
    import os
    host = os.environ.get('SERVER_HOST', 'localhost')
    try:
        port = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        port = 5555
    app.run(host, port)


database='supplies'
user='hackathon1234'
password='wcs2014&'
host='pwcaj7s7mh.database.windows.net'
port='1433'
#connection = psycopg2.connect(database='supplies', user='hackathon1234', password='wcs2014&', host='pwcaj7s7mh.database.windows.net',port='1433')
connection = psycopg2.connect(database, user, password, host, port)

cur = connection.getcursor()
print connection
#cur.execute("select city from locations where name = '%s%' ORDER BY city"
#results = cur.fetchall()
