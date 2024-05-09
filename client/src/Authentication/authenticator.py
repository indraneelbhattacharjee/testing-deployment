from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2  

app = Flask(__name__)
CORS(app)  

host = 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com'
port = 5432  
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'

def connect_to_db():
    try:
        conn = psycopg2.connect(
            dbname='technogaze',
            user='postgres_user',
            password='admin123',
            host=host,
            port=port
        )

        return conn
    
    except Exception as e:
        print("Unable to connect to the database:", e)
        return None

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    conn = connect_to_db()
    if conn is None:
        return jsonify({'message': 'Database connection error'})

    try:
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
        user = cursor.fetchone()

        if user:
            return jsonify({'message': 'Login successful!'})
        else:
            return jsonify({'message': 'Invalid username or password'})
    except Exception as e:
        print("Database error:", e)
        return jsonify({'message': 'Database error'})
    finally:
        if conn:
            conn.close()

if __name__ == '__main__':
    app.run(debug=True)
