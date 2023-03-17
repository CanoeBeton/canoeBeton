drop table if exists years_members;

CREATE TABLE years_members (
  year int(11) NOT NULL,
  user_id int(11) NOT NULL,
  PRIMARY KEY (year, user_id)
);

