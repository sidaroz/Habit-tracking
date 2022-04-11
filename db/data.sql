DROP TABLE IF EXISTS users;

CREATE TABLE users (
    -- id serial PRIMARY KEY,
    email varchar NOT NULL UNIQUE,
    username varchar NOT NULL UNIQUE,
    password_set varchar NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    -- id serial PRIMARY KEY,
    username varchar NOT NULL,
    habits_id varchar NOT NULL ,
    repetition int NOT NULL,
    frequency varchar NOT NULL
);

INSERT INTO users (email, username, password_set)
VALUES
    ('Sidar@mail.com', 'Sidar1','Cats123'),
    ('Sami@mail.com', 'Sami2','Dogs123'),
    ('Jax@mail.com', 'Jax3','Clarinet123'),
    ('Anwar@mail.com','Anwar4','Bear123'),
    ('Mel@mail.com','Mel5','Frog123');