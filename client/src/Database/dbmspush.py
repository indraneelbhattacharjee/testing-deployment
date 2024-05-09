import psycopg2
from psycopg2 import Error

# Database connection parameters
host = 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com'
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'

# SQL commands for creating tables
sql_commands = [
    """
    CREATE TABLE "User" (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
    )
    """,
    """
    CREATE TABLE Employee (
        employee_id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
    )
    """,
    """
    CREATE TABLE Transaction (
        transaction_id SERIAL PRIMARY KEY,
        user_id INT,
        product_name VARCHAR(100),
        transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES "User"(user_id)
    )
    """,
    """
    CREATE TABLE Dashboard (
        task_id SERIAL PRIMARY KEY,
        employee_id INT,
        task_description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (employee_id) REFERENCES Employee(employee_id)
    )
    """,
    """
    CREATE TABLE Project (
        project_id SERIAL PRIMARY KEY,
        project_name VARCHAR(100),
        status VARCHAR(50),
        manager VARCHAR(100),
        notes TEXT
    )
    """
]

# Connect to the database and create tables
try:
    connection = psycopg2.connect(
        host=host,
        database='technogaze',
        user=user,
        password=password
    )
    cursor = connection.cursor()

    tables_dropped = []

    # Execute SQL commands one by one and report status
    for command in sql_commands:
        try:
            cursor.execute(command)
            print(f"Table created successfully: {command.split()[2]}")
            connection.commit()
        except Exception as e:
            print(f"Error creating table: {command.split()[2]}. Error: {str(e)}")
            connection.rollback()
            
            # Drop tables if creation fails
            for table_command in reversed(sql_commands[:sql_commands.index(command) + 1]):
                table_name = table_command.split()[2]
                try:
                    cursor.execute(f"DROP TABLE IF EXISTS {table_name} CASCADE")
                    connection.commit()
                    print(f"Table dropped: {table_name}")
                    tables_dropped.append(table_name)
                except Exception as drop_error:
                    print(f"Error dropping table: {table_name}. Error: {str(drop_error)}")
                    connection.rollback()
                    break
            break
    else:
        print("All tables created successfully!")

    # Verify if all tables are dropped
    if tables_dropped and all(table not in tables_dropped for table in ["User", "Transaction", "Dashboard", "Employee", "Project"]):
        print("All tables dropped successfully!")

except Exception as error:
    print("Error while connecting to PostgreSQL:", error)

finally:
    # Close database connection
    if connection:
        cursor.close()
        connection.close()
