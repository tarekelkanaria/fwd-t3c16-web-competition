# Full Stack Nanodegree Web Competition

#### Egypt-FWD T3C16 - January 23 Cohort

<br>
This repository will act as a guideline for your team to work on the group activity.
<br>
<br>

The objective of this competition is purely dedicated to have you experience working as part of a team to develop a basic CRUD application as a practice for yourselves and for the project of the nanodegree.

### dotenv variables

POSTGRES_HOST=127.0.0.1  
POSTGRES_DB=streaming  
POSTGRES_DB_TEST=streaming_test  
POSTGRES_USER=streamer  
POSTGRES_PWD=stream_fwd_pass

## Streaming Application

You are going to model a database for a streaming service application and develop the server-side application connected to the database.

The database models should be simple and not over-engineered for the purposes of the activity. The database should be composed of the following entities:

- Movies
- Users
- User List

You should create APIs for every entity as per the RESTful guidelines. These APIs should be:

- get() --> Retrieve all records of the entity.
- show() --> Retrieve single record for a specific entity through an id, name or email.
- create() --> Create a new record for the entity.
- delete() --> Delete a record of the entity.
- update() --> Modify record data of an entity.

You should also create at least 3 test cases for your endpoints to show that they work as required to. These test cases should at least have one successful and one failing test.

### Database Schema

The schema proposed is the minimal requirement for your submission but any additions is up to you. It is recommended that you follow the schema and fulfill the requirements needed prior to making additional changes.

### Movies Entity

The movies entity should include the following attributes:

- id
- name
- release date

### Users Entity

The users entity should include the following attributes:

- id
- email
- password

### User Watch List

The user list should map a many-to-many relationship defining the movies a user would want to watch. You can also add an attribute to log if the user has watched this movie yet or not. You can draw up your own schema but don't forget that it should map a many-to-many relationship between the users and the movies entity.

## Submission Method

You are going to be working as teams and below are the guidelines for submitting your work:

- Fork the repository then clone it to start working on the activity.
- Follow your SL's instructions on how to send your submission during the session.

## Grading Scheme

You are going to be receiving feedback based on the following criteria:

- Functionality.
- Project hierarchy and structure.
- Clean code.
- Test cases.
