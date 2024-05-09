import psycopg2

# Database connection parameters
host = 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com'
port = 5432  # default port for PostgreSQL
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'

try:
    # Establish connection to the default database 'postgres'
    conn = psycopg2.connect(
        host=host,
        port=port,
        dbname='postgres',  # Connect to default 'postgres' database
        user=user,
        password=password
    )

    # Set autocommit mode to True
    conn.autocommit = True

    # Create a cursor object
    cursor = conn.cursor()

    # Create the initial database 'technogaze' only for dev team
   # cursor.execute(f"CREATE DATABASE {dbname}")
    
    #!!!!DATABASE HAVE ALREADY BEEN CREATED, DO NOT UNCOMMENT THE CODE ABOVE, IT FOR DEMONSTRATION PURPOSE ONLY.!!!!
  
    if cursor is not None:
        print(f"Database '{dbname}' is connected.")
    else:
        print("COnnection Denied")

except psycopg2.Error as e:
    print("Error: Unable to connect to the database or create the database:", e)

finally:
    # Close cursor and connection
    if 'conn' in locals():
        cursor.close()
        conn.close()
