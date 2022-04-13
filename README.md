# Basic rest api

This is basic rest api for note taking.

## Technologies

- Node js
- Express
- uuid

### Note Service:

- [x] POST /create | This route create new note
      Example body

```json
//Example post body
"note":"test123"
```

- [x] GET /get | This route gets all the notes
- [ ] GET /get/:id | This route gets spesific note by id
- [ ] PATCH /update/:id | This route updates given note by id
- [ ] DELETE /delete/:id | This route deletes given note with id
