# CREATE TRIGGER delete_year_member_on_delete_member
# Error syntax
# BEFORE DELETE ON members
# FOR EACH ROW
# BEGIN
#     DELETE FROM years_members ym WHERE ym.member_id = OLD.id;
# END;
#
#
# CREATE TRIGGER delete_year_member_on_delete_year
# BEFORE DELETE ON years
# FOR EACH ROW
# BEGIN
#     DELETE FROM years_members ym WHERE ym.year = OLD.year;
# END;
#
# CREATE TRIGGER delete_tournament_on_delete_year
# BEFORE DELETE ON years
# FOR EACH ROW
# BEGIN
#     DELETE FROM tournaments t WHERE t.year = OLD.year;
# END;
#
# CREATE TRIGGER delete_melange_on_delete_boat
# BEFORE DELETE ON boats
# FOR EACH ROW
# BEGIN
#     DELETE FROM melanges m WHERE m.boat_name = OLD.name;
# END;
#
