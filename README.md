# Technogaze

## Background

Team Technogaze was formed by a group of students at California State University - Sacramento for the purpose of developing infrastructure solutions for Bay Develops and to complete their Senior Project requirements. This team is led by Indraneel Bhattacharjee and consists of 7 more team members who are engineers, developers, and UI/UX Designers. Over the course of this project the Technogaze team developed a full service interactive website in order to fulfill the business needs of Bay Develops. The website includes an interactive user experience that enables browsing of secuirty and IT products, an elegant landing page, seemless integration of transaction/purchase functionality, and an interactive chatbot that can enable optimal user experience. 




![logo](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/bayDevelopsLogo(black).png)

## Team information

1. Indraneel Bhattacharjee : indraneelbhattachar@csus.edu
2. Dip Patel : dippatel@csus.edu
3. Sanjot Chandi : schandi@csus.edu
4. Saniya Patel : spatel7@csus.edu
5. Cathy Khong : cathyduyenkhong@csus.edu
6. Tanner Colbert : tannerjcolbert@csus.edu 
7. Kevinpreet Singh : ksdeol@csus.edu
8. Julian Martinez : julianmartinez2@csus.edu

Repository for CSC 191 - Infrastructure Development for Bay Develops

## Install
To rebuild the project, run the following commands in order:
* Make sure `node` is in your path (verson 14.x, 16.x or 18.x).
* `git clone https://github.com/RUKRAZ/Technogaze.git` - latest version on GitHub
* `npm install --force` - install required dependencies

## Configuration
To run on localhost, input the following command:
*`npm start`

## Usage

Once the webpage is running, point your browser to http://localhost:3000 to access the web interface.

## API

StripeAPI: For payment.

Auth0: For user authentication.

## Testing
Team Technogaze is dedicated to ensuring the robustness and efficiency of Bay Develops' web application through a comprehensive testing strategy. This strategy incorporates the use of Selenium, Jest, Postman, and Pytest to thoroughly examine each layer of the application, from frontend user interactions to backend API functionality and database integrity.

Selenium for FrontEnd Testing

Overview:
Our team employs Selenium to simulate real-world user interactions with the Bay Develops web application. This tool enables us to validate the visual and functional aspects of the frontend across various browsers and platforms, ensuring a consistent and flawless user experience. Note that some front-end tests were done manually instead of using Selenium and some were done with Jest to help certain team members who struggled with Selenium.

Testing Strategy:
Functional Testing: We automate navigation, form submissions, and clicks to validate each frontend function.
CrossBrowser Testing: We verify that the application performs consistently across Chrome, Firefox, Safari, and Edge.
Regression Testing: Each new release is rigorously tested to ensure that enhancements or bug fixes do not adversely affect existing functionalities.
Responsive Testing: We ensure that the web application is responsive and functions well on various devices including tablets and smartphones.

Tools and Technologies:
Selenium WebDriver: Manages browser interactions programmatically.
Selenium Grid: Facilitates parallel testing across different environments.
Test Management Tools: We integrate with frameworks like JUnit and TestNG to organize tests and generate insightful reports.

Postman for BackEnd Testing

Overview:
Postman is our tool of choice for testing the API layer of Bay Develops' web application. It allows us to ensure that all server responses are accurate under normal and edge case conditions, contributing to the application's reliability and security.

Testing Strategy:
API Validation: We test all API endpoints for correct status codes, response times, and data accuracy.
Security Testing: We validate authentication and authorization for all endpoints to prevent unauthorized access.
Load Testing: We simulate high traffic to evaluate API performance and stability.
Integration Testing: We check integration points between the API and other services, including third party integrations, to ensure seamless data flow and functionality.

Tools and Technologies:
Postman Workspaces: Facilitates team collaboration on API testing.
Newman: Allows us to run Postman collections directly within our continuous integration pipelines.

Pytest for Database Testing

Overview:
Team Technogaze utilizes Pytest for comprehensive database testing, focusing on the integrity and performance of the data layer within the Bay Develops web application. This ensures that all data handling by the application is secure and efficient.

Testing Strategy:
Unit Testing: We perform tests on individual database functions and stored procedures.
Data Consistency and Integrity Testing: We validate data manipulation operations for accuracy and reliability.
Performance Testing: We assess the database performance under varying loads to ensure responsiveness under stress.
Migration Testing: Critical during schema updates, we ensure that migrations do not affect the integrity or performance of the existing data.

Tools and Technologies:
Database Interfaces: We use Postgresql for crafting database queries within our tests.
CI/CD Integration: Pytest is integrated into our development pipeline to automatically run database tests during code commits and merges.

Integration of Testing Tools for Comprehensive Assurance:
By integrating Selenium, Postman, and Pytest, Team Technogaze ensures that every component of the Bay Develops web application, from frontend to backend and the underlying database, is thoroughly tested. This holistic approach to testing guarantees that the application not only meets our high standards for user experience and functionality but also remains scalable, secure, and robust against future challenges.

## Developer Instructions

Here is a tutorial on how to get the repo onto your local machine as well as pushing and pulling.

Step 1: Go to our main repo on github here is the link. https://github.com/RUKRAZ/Technogaze
Step 2: Click on code and drop down menu will apear. Leave it on the HTTPS tab and copy that url.
Step 3: Now that you have the link open up your command prompt and change the directiory to where you would like the project to be.
Step 4: type in this command: git clone https://github.com/RUKRAZ/Technogaze.git
Step 5: Now you have the project on your local machine.
Step 6: Download and Install GitHub Desktop this will allow for updating your branch and push to the main without having to use the command prompt
Step 7: Sign into GituHub Desktop and then open your repo. Choose the branch you would like to work on and then open it in your IDE make changes come back to the Github Desktop and it will say would you like to push. You click that then you will make a pull request to the main branch now you are all done.

## UI/UX

The user interface (UI) adopts a sleek, minimalistic design with a modern aesthetic, characterized by its intuitive navigation and thoughtful placement of elements. Each component is strategically positioned, enhancing the user experience through logical arrangement and generous whitespace that provides clarity and breathing room. The choice of a black and muted red color scheme not only exudes sophistication but also creates striking contrast, drawing attention to key features. Additionally, the carefully selected font size ensures optimal readability, catering to users of all preferences and ensuring a seamless interaction with the interface.

Logo: 

<img width="304" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/471480cb-e549-48bf-bc63-19b808e70125">

Logo with transparent background (what we use):

![Bay Develops Logo](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/baydevelopslogo-1-1%402x.png)

### Web Pages

<img width="505" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/49dd99a4-730c-422c-84bd-6c747e6aa908">

<img width="544" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/117cbc56-f6fa-4166-83a5-a5f88c2fa070">

<img width="718" alt="image" src="https://github.com/RUKRAZ/Technogaze/assets/113735951/37579608-e491-48b3-91da-159ffc34f7d5">

![Dashboard](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/User%20Dashboard.jpg)

![Contact Us](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/Contact%20Us.png)

![Services](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Mockups/ServicesPage.jpg)

## ERD 

![ERD](https://github.com/RUKRAZ/Technogaze/blob/main/src/Database/erd.png)

## Flow Diagram

![Flow Diagram](https://github.com/RUKRAZ/Technogaze/blob/main/public/img/Bay%20Develops%20Flow.jpg)

## Database

## Purpose and Scope
This database system is designed to support a web-based application that manages user interactions, transactions, and project-related activities. The primary goal of the database is to store and retrieve data efficiently, ensure data integrity, and support complex business logic required by the application.

## Database Schema Description
The database consists of five main tables: `User`, `Employee`, `Transaction`, `Dashboard`, and `Project`. Each table serves a distinct purpose:

1. **User Table**:
   - **Purpose**: Stores all data related to the users of the application.
   - **Fields**:
     - `user_id`: Serial primary key.
     - `username`: VARCHAR(50), not nullable.
     - `email`: VARCHAR(100), unique, not nullable.
     - `password`: VARCHAR(100), not nullable.

2. **Employee Table**:
   - **Purpose**: Contains information about employees who manage and operate the application.
   - **Fields**:
     - `employee_id`: Serial primary key.
     - `username`: VARCHAR(50), not nullable.
     - `email`: VARCHAR(100), unique, not nullable.
     - `password`: VARCHAR(100), not nullable.

3. **Transaction Table**:
   - **Purpose**: Logs all transactions made within the application.
   - **Fields**:
     - `transaction_id`: Serial primary key.
     - `user_id`: Integer, foreign key referencing `User`.
     - `product_id`: Serial, unique.
     - `product_name`: VARCHAR(100).
     - `transaction_date`: TIMESTAMP, default CURRENT_TIMESTAMP.

4. **Dashboard Table**:
   - **Purpose**: Used by employees to manage tasks and monitor progress.
   - **Fields**:
     - `task_id`: Serial primary key.
     - `employee_id`: Integer, foreign key referencing `Employee`.
     - `task_description`: TEXT.
     - `created_at`: TIMESTAMP, default CURRENT_TIMESTAMP.

5. **Project Table**:
   - **Purpose**: Manages information related to various projects within the organization.
   - **Fields**:
     - `project_id`: Serial primary key.
     - `project_name`: VARCHAR(100).
     - `status`: VARCHAR(50).
     - `manager`: VARCHAR(100), referring to an employee.
     - `notes`: TEXT.

## Relationships
- **Users and Transactions**: One-to-many relationship where each user can have multiple transactions.
- **Employees and Tasks**: One-to-many relationship from `Employee` to `Dashboard`, indicating that each employee can manage multiple tasks.
- **Projects and Employees**: A referential link via the `manager` field in the `Project` table to the `Employee` table, suggesting that each project is managed by one employee.

## Database Features
- **Relational Integrity**: Ensured through foreign keys and unique constraints.
- **Data Consistency**: Enforced by transaction controls and consistent schema definitions.
- **Scalability and Performance**: Indexes on frequently queried fields like `user_id`, `employee_id`, and email fields improve query 
performance. The database is designed to efficiently scale with increasing data volume and complexity.
- **Security**: Passwords are stored securely using hashing algorithms. Access control mechanisms restrict unauthorized database access.

## Technical Specifications
- **Database Management System (DBMS)**: PostgreSQL
- **Hosted**: AWS RDS, providing high availability, backup solutions, and easy scalability.
- **Access Patterns**: Primarily CRUD (Create, Read, Update, Delete) operations with complex queries supporting business intelligence and data analysis.

## Maintenance and Monitoring
- **Backup and Recovery**: Regular backups are scheduled, and disaster recovery plans are tested bi-annually.
- **Performance Monitoring**: Continuous monitoring with alerts set up for any performance anomalies or operational issues.
- **Data Integrity Checks**: Regular integrity checks are performed to ensure no corruption or data loss.


## Interactions:
1. When the employee makes an update to the “To-Do List” or the “Project” section of the employee dashboard the employee dashboard and user dashboard are updated. Which requires the Dashboard table to be updated with this new information.
2. When the employee creates a project it gets saved to the Project table.
3. When a user purchases a product the “Recommended Products” section of the user dashboard and the “Clients” section of the employee dashboard must be updated. The transaction information gets saved in the Transaction table. The corresponding product icon will be removed from the “Recommended Products” tab and the client information along with what product they bought will be displayed in the “Clients” tab.

## Deployment:

1. **GitHub Account**: Vercel integrates seamlessly with GitHub (as well as GitLab and Bitbucket). Ensure your project code is in a repository on one of these platforms.
2. **Vercel Account**: Create an account on Vercel if you don't already have one.
3. **AWS Account**: Since your database is hosted on AWS, you need access to your AWS account to manage database credentials and configurations.
4. **Local Development Environment**: Make sure your application is fully functional locally before attempting to deploy.

### Step 1: Prepare Your Project

#### Backend Setup

1. **Create a Node.js API**:
   - Ensure your Node.js application handles requests and responses correctly.
   - Test it locally to make sure everything works as expected.

2. **Environment Variables**:
   - Move configuration such as database connection strings to environment variables. Use a `.env` file locally, and Vercel will allow you to configure them in their dashboard.

#### Frontend Setup

1. **Build Your React Application**:
   - Ensure that your React app is set up to proxy API requests to the backend. During development, this might be configured to target `localhost`, but for production, it should target the deployed backend URL.

### Step 2: Set Up AWS Database

1. **Configure Your Database**:
   - Set up your AWS database (e.g., RDS for relational databases or DynamoDB for NoSQL).
   - Ensure that the database is accessible from your deployment environment. This may involve configuring security groups and access rules in AWS to allow connections from Vercel's IP addresses.

2. **Secure Database Access**:
   - Never expose your database directly to the internet. Ensure it's only accessible from your backend application.
   - Manage your database credentials securely using AWS IAM roles and policies.

#### Connect Your Repository

1. **Log into Vercel**:
   - Go to Vercel and log in.
   - Connect your GitHub/GitLab/Bitbucket repository to Vercel. This can be done from the Vercel dashboard by creating a new project and linking it to your repository.

#### Configure Project

1. **Environment Variables**:
   - Set up the necessary environment variables in Vercel's settings for your project. This includes database connection details and any other secrets or keys.

2. **Build Commands and Output Directory**:
   - Configure the build settings in Vercel:
     - **Build Command**: This might be something like `npm run build` for your React app and `npm run start` for your Node.js backend if you're using something like Next.js.
     - **Output Directory**: Typically `build` for Create React App projects.

  **Push Your Code**:
   - Push the latest code to your connected repository. Vercel automatically detects this push and starts the deployment process.
   - You can monitor the deployment progress directly on your Vercel dashboard.

### Step 4: Post-Deployment

1. **Verify Deployment**:
   - Once deployed, visit the provided URL by Vercel to check if the React application loads correctly.
   - Test the connectivity between your frontend, backend, and database to ensure everything is communicating as expected.

2. **Setup Domain**:
   - If you own a domain, you can configure it in Vercel to point to your new deployment for a professional URL.

3. **Monitor & Scale**:
   - Vercel provides analytics and monitoring tools. Keep an eye on performance and scale up resources as needed.
