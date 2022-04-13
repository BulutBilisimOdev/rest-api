const express = require('express');
const cors = require('cors');

const noteRouter = require('./router');
const { PORT } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', noteRouter);

app.listen(PORT, () => {
	console.info(`App started on:http://localhost:${PORT}`);
});
