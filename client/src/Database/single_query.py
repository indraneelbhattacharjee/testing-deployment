import psycopg2

# Database connection parameters
host = 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com'
port = 5432  # default port for PostgreSQL
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'

try:
    # Establish connection to the 'technogaze' database
    conn = psycopg2.connect(
        host=host,
        port=port,
        dbname=dbname,  # Connect to the 'technogaze' database
        user=user,
        password=password
    )

    # Set autocommit mode to True
    conn.autocommit = True

    # Create a cursor object
    cursor = conn.cursor()

    # Execute the modification query
    cursor.execute("ALTER TABLE Transaction ADD COLUMN product_id SERIAL UNIQUE;")

    print("Modification query executed successfully.")

except psycopg2.Error as e:
    print("Error: Unable to execute the modification query:", e)

finally:
    # Close cursor and connection
    if 'conn' in locals():
        cursor.close()
        conn.close()
