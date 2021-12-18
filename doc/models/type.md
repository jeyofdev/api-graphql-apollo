# Model Type

### Get all types

```javascript
query Types {
  Types {
    id
    title
    series {
      id
      title
      year
      seasons
    }
  }
}
```

### Post new type

```javascript
mutation AddType($title: String!) {
  AddType(title: $title) {
    id
    title
    series {
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
  "title": "Action"
}
```

### Update type

```javascript
mutation UpdateType($updateTypeId: Int!, $title: String) {
  UpdateType(id: $updateTypeId, title: $title) {
    id
    title
    series {
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
  "updateTypeId": 1,
  "title": "Adventure"
}
```

### Delete type

```javascript
mutation DeleteType($deleteTypeId: Int!) {
  DeleteType(id: $deleteTypeId) {
    id
    title
    series {
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
  "deleteTypeId": 1
}
```
