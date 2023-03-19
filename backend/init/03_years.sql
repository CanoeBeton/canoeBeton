drop table if exists years;

CREATE TABLE years (
  year int(11) NOT NULL,
  boat_name varchar(100) not null,
  partenaire_mosaique blob,
  active tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (year)
);

## vérifier qui'il n'y a pas deux active ON UPDATE
