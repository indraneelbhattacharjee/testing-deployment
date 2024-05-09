import psycopg2 as psycopg2
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask

app = Flask(__name__)


# Database connection parameters
host = 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com'
port = 5432  # default port for PostgreSQL
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'


text=''
try:
    # Establish connection to the PostgreSQL database
    conn = psycopg2.connect(
        host=host,
        port=port,
        dbname=dbname,
        user=user,
        password=password
    )

    # Create a cursor object
    cursor = conn.cursor()

    # Create a users table if it doesn't exist
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS dashboard (
            todo TEXT NOT NULL
        )
    ''')
    conn.commit()

  
    # Function to insert a new task into the database (dashboard)
    def insert_todo(text):

        cursor.execute('INSERT INTO dashboard (todo) VALUES (%s)',(text,))
        conn.commit()

    # Function to retrieve all todo items (dashboard)
    def retrieve_todo():
        cursor.execute('SELECT * FROM dashboard')
        for rec in cursor:
            rec
    def remove_todo(text):
        cursor.execute('Delete FROM dashboard where todo=(%s)', (text,))

 

except psycopg2.Error as e:
    print('Error: Unable to connect to the database or execute queries:', e)

finally:
    # Close the database connection
    if 'conn' in locals():
        conn.close()
