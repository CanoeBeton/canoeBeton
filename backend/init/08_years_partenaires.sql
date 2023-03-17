drop table if exists partenaires;

CREATE TABLE partenaires (
    year varchar(255) NOT NULL,
    partenaire_name TEXT NOT NULL,
    type ENUM('bronze', 'argent', 'gold'),
  PRIMARY KEY (year, partenaire_name)
);


