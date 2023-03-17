drop table if exists events;

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    begin_date DATETIME not null ,
    end_date DATETIME not null ,
    description TEXT,
    image_path VARCHAR(255),
  PRIMARY KEY (id)
);


