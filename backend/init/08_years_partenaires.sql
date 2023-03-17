drop table if exists partenaires;

CREATE TABLE partenaires (
    year varchar(255) NOT NULL,
    partenaire_name varchar(255) NOT NULL,
    type ENUM('bronze', 'argent', 'gold'),
  PRIMARY KEY (year, partenaire_name)
);


