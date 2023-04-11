DELIMITER $$

CREATE PROCEDURE `truncate_sessions_table`()
BEGIN
    TRUNCATE TABLE sessions;
END $$

DELIMITER ;

CREATE EVENT `truncate_sessions_table_event`
ON SCHEDULE EVERY 1 DAY
DO
    CALL truncate_sessions_table();