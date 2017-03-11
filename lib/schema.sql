-- DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS vidoes;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name varchar(250) NOT NULL,
  last_name varchar(250) NOT NULL,
  email varchar(250) NOT NULL UNIQUE,
  password varchar(250) NOT NULL
);

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  title varchar(250) NOT NULL,
  url varchar(250),
  upvotes integer,
  downvotes integer,
  users integer REFERENCES users(id)
);
