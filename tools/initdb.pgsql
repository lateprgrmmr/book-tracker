-- Drops titles table
DROP TABLE IF EXISTS titles;

-- Creates titles table
CREATE TABLE IF NOT EXISTS titles (
    id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , name varchar(100) NOT NULL
    , author varchar(50) NOT NULL
    , pages int NOT NULL
    , created_time timestamp  NOT NULL default (current_date at time zone 'utc')
);