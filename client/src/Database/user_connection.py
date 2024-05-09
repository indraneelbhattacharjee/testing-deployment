import psycopg2

# RDS PostgreSQL endpoint
host = 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com'
port = 5432  # default port for PostgreSQL
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'

# Establish connection
conn = psycopg2.connect(
    host=host,
    port=port,
    dbname=dbname,
    user=user,
    password=password
)

# Create a cursor object
cursor = conn.cursor()

if cursor is None: 
    print("connection denied")
else: 
    print("connection established")

# Execute a sample query
#cursor.execute("SELECT * FROM your_table")

# Fetch and print results
#for row in cursor.fetchall():
    #print(row)

# Close cursor and connection
cursor.close()
conn.close()
