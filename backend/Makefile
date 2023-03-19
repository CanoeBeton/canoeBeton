PHONY: start
start:
	docker-compose up


.PHONY: db-init
db-init:
	cat init/*.sql | docker container exec -i backend-db-1 mysql --user root --password=1234
