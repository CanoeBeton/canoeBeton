# Starter le projet

La bd roule sur un instance de docker faut donc installer le deamon de docker pour commencer!

### Sur mac
```
brew install docker
```

Par la suite, pour la starter c'est la commande: `docker compose up`


## Makefile

Pour les commandes utilent vous pouvez regarder dans le make file

Il y a un `make start` que vous pouvez utiliser pour lancer le docker et il y a `make db-init` qui permet de lancer les scripts sql present dans le dossier `init`