DROP TABLE IF EXISTS admins;

CREATE TABLE IF NOT EXISTS admins (
    email varchar(100),
    password varchar(200),
    PRIMARY KEY (email)
);

DROP TABLE IF EXISTS sessions;

CREATE TABLE IF NOT EXISTS sessions (
    token varchar(100),
    email varchar(100),
    PRIMARY KEY (token),
    FOREIGN KEY (email) REFERENCES admins(email)
);