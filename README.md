# App Center


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Node.js server

```
nodemon
```

## Mongo

Récupération de l'image Docker

```
docker pull mongo
```

Démarrage d'un container mongo

```
docker run --name mongodock -p 27017:27017 -i -t -d mongo
```

http://pierrepironin.github.io/docker-et-mongodb/
https://hub.docker.com/_/mongo/

### Requête

```
# use a database
use appcenter

# list collections
db.getCollectionNames()

# select one
db.users.findOne({name:'Julien'})

# select all
db.users.find().pretty()

# insert one
db.users.insertOne({"name":"julien", "email":"julien@mail.fr", "password": "$2b$08$7Mcj8pKoth.StQgLllPcmuoLg0HxduZUzrl2Otkb.UMDkSwhveUte", "role": "ADMIN"});

# update
db.users.updateOne({"name": "Test"}, {$set: {"email": "test@mail.fr"}})
```

https://geekflare.com/fr/mongodb-queries-examples/

## Scripts

Encrypt password

```
node ./scripts/pwd-encrypt.js <list of passwords separate by spaces>
```

## Build

```
docker build -t appnode . 
```

## Couleurs 

bleu foncé : #24478f

bleu : #46d2eb

bleu clair : #ccf7ff

## Police 

Teko

## Thanks to

https://codesource.io/setting-up-vue-authentication-using-expressjs-mongodb-and-jwt/

