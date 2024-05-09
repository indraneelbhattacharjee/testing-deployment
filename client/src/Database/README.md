ENDPOINT for technogaze instance = technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com
port = 5432 
dbname = 'technogaze'
user = 'postgres_user'
password = 'admin123'
REGION = us-east-2c

(windods)



(Mac User)
PLEASE INTALL HOMEBREW BEFORE PROCEEDING FURTHER

How to install Postgresql in terminal?

brew install postgresql
export PATH=$PATH:/path/to/postgresql/bin 

How to connect to the database?

psql --host=technogaze.c722y6y2on6l.us-east-2.rds.amazonaws.com \
     --port=5432 \
     --username=postgres_user \
     --password \
     --dbname=technogaze


Password: admin123

How to see tables?

\dt


A visual reference is in src/Database/terminalconnect.png



The technogaze instance is created only for the Technogaze development team to test the project and will be later changed
by the respected authorities / product owners / Bay Develops.