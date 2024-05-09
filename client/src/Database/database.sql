CREATE TABLE User (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Transaction (
    transaction_id SERIAL PRIMARY KEY,
    user_id INT,
    product_id SERIAL UNIQUE,
    product_name VARCHAR(100),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES "User"(user_id)
);

CREATE TABLE Dashboard (
    task_id SERIAL PRIMARY KEY,
    employee_id INT,
    task_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES Employee(employee_id)
);

CREATE TABLE Employee (
    employee_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Project (
    project_id SERIAL PRIMARY KEY,
    project_name VARCHAR(100),
    status VARCHAR(50),
    manager VARCHAR(100),
    notes TEXT
);