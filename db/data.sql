DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    email varchar NOT NULL UNIQUE,
    username varchar NOT NULL UNIQUE,
    password_set varchar NOT NULL UNIQUE
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    username varchar NOT NULL,
    habits_id varchar NOT NULL ,
    repetition int NOT NULL,
    frequency varchar NOT NULL
);