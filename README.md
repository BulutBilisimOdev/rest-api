# Basic rest api

This is basic rest api for note taking.

## Technologies

- Node js
- Express
- uuid

### Note Service:

- [x] POST /create | This route create new note | Deployed: http://3.250.22.122:8081/create
      Example body

```json
//Example post body
{
	"note": "test123"
}
```

- [x] GET /get | This route gets all the notes | Deployed: http://3.250.22.122:8081/get
- [x] GET /get/:id | This route gets spesific note by id  | Deployed: http://3.250.22.122:8081/get/:id
- [x] PATCH /update/:id | This route updates given note by id | Deployed: http://3.250.22.122:8081/update/:id

```json
//Example update body
{
	"note": "updated note"
}
```

- [x] DELETE /delete/:id | This route deletes given note with id | Deployed: http://3.250.22.122:8081/delete/:id

## Setup and Usage

- Run `npm install` for package installations.
- And then Run `npm run dev` for serve backend in development mode on http://localhost:8081
- Or Run `npm run start` for start backend in normal mode on http://localhost:8081

