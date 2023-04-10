
#Index qui permet de retrouver facilement les années acitives
CREATE INDEX yearActive on years (active, year);

#Index qui permet de retrouver facilement les partenaires actifs
CREATE index partenaireActive on partenaires (active, name);



