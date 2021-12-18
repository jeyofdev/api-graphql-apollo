# Model episode

### Get all episodes

```javascript
query Episodes {
  Episodes {
    id
    title
    number
    content
    serie {
      id
      title
      year
      seasons
    }
  }
}
```

### Post new episode

```javascript
mutation AddEpisode($title: String!, $number: Int!, $content: String!, $serieId: Int!) {
  AddEpisode(title: $title, number: $number, content: $content, serieId: $serieId) {
    id
    title
    number
    content
    serie {
      id
      title
      year
      seasons
    }
  }
}
```

```javascript
{
  "title": "The Child",
  "number": 1,
  "content": "Target in hand, the Mandalorian must now contend with scavengers. ",
  "serieId": 2
}
```

### Update episode

```javascript
mutation UpdateEpisode($updateEpisodeId: Int!, $title: String, $number: Int, $content: String, $serieId: Int!) {
  UpdateEpisode(id: $updateEpisodeId, title: $title, number: $number, content: $content, serieId: $serieId) {
    id
    title
    number
    content
    serie {
      id
      title
      year
      seasons
    }
  }
}
```

```javascript
{
  "updateEpisodeId": 1,
  "title": "The Sin",
  "content": "The battered Mandalorian returns to his client for his reward.",
}
```

### Delete episode

```javascript
mutation DeleteEpisode($deleteEpisodeId: Int!) {
  DeleteEpisode(id: $deleteEpisodeId) {
    id
    title
    number
    content
    serie {
      id
      title
      year
      seasons
    }
  }
}
```

```javascript
{
  "deleteEpisodeId": 1
}
```
