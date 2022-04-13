const express = require('express');
const cors = require('cors');

const { PORT } = require('./config');

const app = express();

app.use(cors());

app.get('/', (_, res) => {
	res.json({ message: 'hello' });
});

app.listen(PORT, () => {
	console.info(`App started on:http://localhost:${PORT}`);
});
