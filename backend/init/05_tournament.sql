drop table if exists tournaments;

CREATE TABLE tournaments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    position INT,
    localisation VARCHAR(255),
    description VARCHAR(255),
    date DATE,
    PRIMARY KEY (id)
);



