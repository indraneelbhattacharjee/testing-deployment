import psycopg2

# Database connection parameters
host = 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com'
port = 5432
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'

try:
    connection = psycopg2.connect(
        host=host,
        database=dbname,
        user=user,
        password=password
    )
    cursor = connection.cursor()

    # Check if tables exist in the database
    cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'")
    existing_tables = [table[0] for table in cursor.fetchall()]

    if existing_tables:
        print("Tables exist in the database. Dropping all tables...")

        # Drop all tables
        for table_name in existing_tables:
            try:
                cursor.execute(f"DROP TABLE IF EXISTS {table_name} CASCADE")
                connection.commit()
                print(f"Table dropped successfully: {table_name}")
            except Exception as drop_error:
                print(f"Error dropping table: {table_name}. Error: {str(drop_error)}")
                connection.rollback()

    else:
        print("No existing tables found in the database.")

except Exception as error:
    print("Error while connecting to PostgreSQL:", error)

finally:
    # Close database connection
    if connection:
        cursor.close()
        connection.close()
