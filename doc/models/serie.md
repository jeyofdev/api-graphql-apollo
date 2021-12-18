# Model Serie

### Get all series

```javascript
query Series {
  Series {
    id
    title
    year
    seasons
    types {
      id
      title
    }
    episodes {
      id
      title
      number
      content
    }
  }
}
```

### Post new serie

```javascript
mutation AddSerie($title: String!, $year: Float!, $seasons: Int!, $typeId: Int) {
  AddSerie(title: $title, year: $year, seasons: $seasons, typeId: $typeId) {
    id
    title
    year
    seasons
    types {
      id
      title
    }
    episodes {
      id
      title
      number
      content
    }
  }
}
```

```javascript
{
  "title": "the mandalorian",
  "year": 2020,
  "seasons": 2,
  "typeId": 1
}
```

### Update serie

```javascript
mutation UpdateSerie($updateSerieId: Int!, $year: Int, $seasons: Int, $title: String, $typeId: Int, ) {
  UpdateSerie(id: $updateSerieId, year: $year, seasons: $seasons, title: $title, typeId: $typeId) {
    id
    title
    year
    seasons
    types {
      id
      title
    }
    episodes {
      id
      title
      number
      content
    }
  }
}
```

```javascript
{
  "updateSerieId": 1,
  "typeId": 2
}
```

### Delete serie

```javascript
mutation DeleteSerie($deleteSerieId: Int!) {
  DeleteSerie(id: $deleteSerieId) {
    id
    title
    year
    seasons
    types {
      id
      title
    }
    episodes {
      title
      number
      id
      content
    }
  }
}
```

```javascript
{
  "deleteSerieId": 1
}
```
