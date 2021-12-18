# Model Movie

### Get all movies

```javascript
query Movies {
  Movies {
    id
    title
    director
    year
    rating
    duration
    type
  }
}
```

### Get first movie

```javascript
query FirstMovie {
  FirstMovie {
    id
    title
    director
    year
    rating
    duration
    type
  }
}
```

### Get last movie

```javascript
query LastMovie {
  LastMovie {
    id
    title
    director
    year
    rating
    duration
    type
  }
}
```

### Get movie by title

```javascript
query MovieByTitle($title: String!) {
  MovieByTitle(title: $title) {
    id
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

### Post new movie

```javascript
mutation AddMovie($title: String!, $director: String!, $year: Int!, $rating: Int!, $duration: Int!, $type: String!) {
  AddMovie(title: $title, director: $director, year: $year, rating: $rating, duration: $duration, type: $type) {
    id
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

### Update movie

```javascript
mutation UpdateMovie($updateMovieId: Int!, $title: String, $director: String, $year: Int, $rating: Int, $duration: Int, $type: String) {
  UpdateMovie(id: $updateMovieId, title: $title, director: $director, year: $year, rating: $rating, duration: $duration, type: $type) {
    id
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
  "updateMovieId": 1,
  "type": "Action"
}
```

### Delete movie

```javascript
mutation DeleteMovie($deleteMovieId: Int!) {
  DeleteMovie(id: $deleteMovieId) {
    id
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
  "deleteMovieId": 2
}
```
