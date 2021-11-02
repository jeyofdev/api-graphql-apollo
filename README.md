# Api Graphql Apollo Mongo

Create a basic API with graphQl

## Features

- ![NodeJS](https://img.shields.io/badge/NODE.JS-black?style=plastic&logo=node.js)
- ![GraphQL](https://img.shields.io/badge/GraphQL-black?style=plastic&logo=graphql)
- ![Apollo-GraphQL](https://img.shields.io/badge/ApolloGraphQL-black?style=plastic&logo=apollo-graphql)
- ![MongoDB](https://img.shields.io/badge/MongoDB-black?style=plastic&logo=Mongodb)
- ![EsLint](https://img.shields.io/badge/ESLint-black?style=plastic&logo=eslint)
- ![TypeScript](https://img.shields.io/badge/typescript-black?style=plastic&logo=typescript)
- ![Type-graphql](https://img.shields.io/badge/TypeGraphQL-black?style=plastic)

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
$ npm install
```

### Environment

Create .env file based on .env.example and modify variables if needed.

```sh
# General settings
PORT=your_port

# Database settings
MONGO_URL=your_mongodb_url
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

### Queries

Get all movies

```javascript
query {
  Movies {
    title
    director
    year
    rating
    duration
    type
  }
}
```

Post new movie

```javascript
mutation($title: String!, $director: String!, $year: Int!, $rating: Int!, $duration: Int!, $type: String!) {
  addMovie(title: $title, director: $director, year: $year, rating: $rating, duration: $duration, type: $type) {
    title
    director
    year
    rating
    duration
    type
  }
}
```

```javascript
{
  "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "year": 1993,
    "rating": 8.1,
    "duration": 127,
    "type": "Adventure"
}
```

Delete movie

```javascript
mutation($title: String!) {
  deleteMovie(title: $title) {
    title
    director
    year
    rating
    duration
    type
  }
}
```

```javascript
{
  "title": "Jurassic Park"
}
```
