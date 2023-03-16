USE canoe;

DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO user (name, role, description, image_path)
VALUES ('Test', 'Role', 'Description', 'image_path');