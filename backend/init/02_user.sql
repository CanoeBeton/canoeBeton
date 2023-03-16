USE canoe;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (name, role, description, image_path)
VALUES ('Test', 'Role', 'Description', 'image_path');