import psycopg2 as psycopg2
from werkzeug.security import generate_password_hash, check_password_hash

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
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()


    # Create a users table if it doesn't exist
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS dashboard (
            todo TEXT NOT NULL
        )
    ''')
    conn.commit()

    # Function to insert a new user into the database (signup)
    def insert_user(username, password):
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
        cursor.execute('INSERT INTO users (username, password) VALUES (%s, %s)', (username, hashed_password))
        conn.commit()

    # Function to check login credentials (login)
    def check_credentials(username, password):
        cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
        user = cursor.fetchone()

        if user and check_password_hash(user[2], password):
            return True
        else:
            return False

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

    # Example: Signup a new user
    #insert_user('user11', 'password123')
    #insert_todo('testing')
    #remove_todo('testing')
    # Example: Login (check credentials)
    result = retrieve_todo()
    #result = check_credentials('user1', 'password123')


    if result == 'testing':
        print('retrival successful!')
    else:
        print(result)

except psycopg2.Error as e:
    print('Error: Unable to connect to the database or execute queries:', e)

finally:
    # Close the database connection
    if 'conn' in locals():
        conn.close()
