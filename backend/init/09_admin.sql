DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS admins;

CREATE TABLE IF NOT EXISTS admins (
    email varchar(100),
    password varchar(200),
    PRIMARY KEY (email)
);

INSERT INTO admins VALUES ('admin@canoe.ca', '3a32dc7438a256cadeafb78b062b4e19bb0f516c364b73f24ac3e576581366ba');

CREATE TABLE IF NOT EXISTS sessions (
    token varchar(100),
    email varchar(100),
    PRIMARY KEY (token),
    FOREIGN KEY (email) REFERENCES admins(email)
);