import pytest
import psycopg2
import psycopg2.extras
# Database connection parameters
params = {
    'dbname': 'technogaze',
    'user': 'postgres_user',
    'password': 'admin123',
    'host': 'technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com',
    'port': '5432'  # Default port for PostgreSQL
}

# Fixture to manage a database connection and ensure rollback after each test
@pytest.fixture(scope="function")
def db_conn():
    # Connect to the database
    conn = psycopg2.connect(**params)
    conn.autocommit = False  # Start transaction

    yield conn

    # Roll back any changes and close the connection after each test
    conn.rollback()
    conn.close()

def test_insert_user(db_conn):
    with db_conn.cursor() as cur:
        cur.execute("INSERT INTO \"User\" (username, email, password) VALUES ('user1', 'user1@example.com', 'pass1');")
        cur.execute("SELECT * FROM \"User\" WHERE username='user1';")
        assert cur.fetchone() is not None

def test_query_user_by_email(db_conn):
    with db_conn.cursor() as cur:
        # Ensure the user exists for this query test
        cur.execute("INSERT INTO \"User\" (username, email, password) VALUES ('user1', 'user1@example.com', 'pass1');")
        cur.execute("SELECT * FROM \"User\" WHERE email='user1@example.com';")
        assert cur.fetchone() is not None

def test_update_user_password(db_conn):
    with db_conn.cursor() as cur:
        # Ensure the user exists for this update test
        cur.execute("INSERT INTO \"User\" (username, email, password) VALUES ('user1', 'user1@example.com', 'pass1');")
        cur.execute("UPDATE \"User\" SET password='newpassword' WHERE username='user1';")
        cur.execute("SELECT password FROM \"User\" WHERE username='user1';")
        assert cur.fetchone()[0] == 'newpassword'

def test_delete_user(db_conn):
    with db_conn.cursor() as cur:
        cur.execute("DELETE FROM \"User\" WHERE username='user1';")
        cur.execute("SELECT * FROM \"User\" WHERE username='user1';")
        user = cur.fetchone()
        assert user is None

def test_insert_dashboard(db_conn):
    with db_conn.cursor() as cur:
        todo_text = 'Complete report analysis'
        cur.execute("INSERT INTO dashboard (todo) VALUES (%s);", (todo_text,))
        cur.execute("SELECT todo FROM dashboard WHERE todo = %s;", (todo_text,))
        fetched_todo = cur.fetchone()
        assert fetched_todo is not None
        assert fetched_todo[0] == todo_text

def test_query_dashboard_by_todo(db_conn):
    with db_conn.cursor() as cur:
        todo_text = 'Submit yearly report'
        cur.execute("INSERT INTO dashboard (todo) VALUES (%s);", (todo_text,))
        cur.execute("SELECT todo FROM dashboard WHERE todo = %s;", (todo_text,))
        fetched_todo = cur.fetchone()
        assert fetched_todo is not None
        assert fetched_todo[0] == todo_text

def test_update_dashboard_todo(db_conn):
    with db_conn.cursor() as cur:
        initial_text = 'Initial task'
        updated_text = 'Updated task'
        cur.execute("INSERT INTO dashboard (todo) VALUES (%s);", (initial_text,))
        cur.execute("UPDATE dashboard SET todo = %s WHERE todo = %s;", (updated_text, initial_text))
        cur.execute("SELECT todo FROM dashboard WHERE todo = %s;", (updated_text,))
        updated_todo = cur.fetchone()
        assert updated_todo is not None
        assert updated_todo[0] == updated_text

def test_delete_dashboard_entry(db_conn):
    with db_conn.cursor() as cur:
        todo_text = 'Temporary task'
        cur.execute("INSERT INTO dashboard (todo) VALUES (%s);", (todo_text,))
        cur.execute("DELETE FROM dashboard WHERE todo = %s;", (todo_text,))
        cur.execute("SELECT todo FROM dashboard WHERE todo = %s;", (todo_text,))
        deleted_todo = cur.fetchone()
        assert deleted_todo is None

def test_log_transaction_data(db_conn):
    with db_conn.cursor() as cur:
        # Ensure that the user exists by inserting it before the transaction.
        # Handle possible duplicate insertion error by catching an exception if the user already exists.
        try:
            cur.execute("INSERT INTO \"User\" (user_id, username, email, password) VALUES (1, 'testuser', 'user@example.com', 'password123');")
        except psycopg2.IntegrityError:
            db_conn.rollback()  # Roll back the transaction if the user insertion fails.

        # Now attempt to insert the transaction assuming the user exists
        cur.execute("INSERT INTO \"transaction\" (user_id, product_id, product_name) VALUES (1, 101, 'ProductX');")
        db_conn.commit()  # Commit the transaction to save the changes
        
        # Verify the transaction was inserted correctly
        cur.execute("SELECT * FROM \"transaction\" WHERE user_id = 1 AND product_id = 101;")
        transaction = cur.fetchone()
        assert transaction is not None
