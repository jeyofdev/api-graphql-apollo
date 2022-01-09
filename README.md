# Api Graphql Apollo Sqlite

Create a basic API with graphQl

## Features

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Type-graphql](https://img.shields.io/badge/-TypeGraphQL-%23C04392?style=for-the-badge)

## Getting starting

### Tools

Check that [`Nodejs`](https://nodejs.org/en/download/) is installed :

```sh
$ node -v
```

### Install all dependencies

Install all dependencies :

```sh
$ yarn
```

### Environment

Create .env file based on .env.example and modify variables.

```sh
# Default settings
PORT=4000
```

If you choose database mysql, add :

```sh
yarn add mysql2
```

```sh
# Database settings
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=your_db_host
TYPEORM_USERNAME=your_db_username
TYPEORM_PASSWORD=your_db_password
TYPEORM_DATABASE=your_db_name
TYPEORM_PORT=your_db_port
```

If you choose database sqlite, add :

```sh
yarn add sqlite3
```

```sh
# Database settings
TYPEORM_CONNECTION="sqlite"
TYPEORM_DATABASE="./src/database/db-sqlite.db"
TYPEORM_PORT=your_db_port
```

### Scripts

Execute eslint :

```sh
$ yarn lint
```

Compile the TypeScript files:

```sh
$ yarn build
$ yarn build:watch
```

Start development server :

```sh
$ yarn dev
```

Start production server :

```sh
$ yarn start
```
