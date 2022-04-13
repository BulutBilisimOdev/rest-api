const { v4: uuidv4 } = require('uuid');

let notes = [
	{
		id: '3bed2d48-7faa-428a-8990-866a446ac267',
		note: 'test1',
	},
	{
		id: '9832b125-ab7d-4636-838f-41c28da8b6bc',
		note: 'test2',
	},
];

module.exports = {
	createNote: async (req, res) => {
		const { note } = req.body;
		const newNote = {
			id: uuidv4(),
			note,
		};

		notes.push(newNote);
		return res.status(201).json(notes);
	},
	getNotes: async (_, res) => {
		return res.status(200).json(notes);
	},
	getNoteById: async (req, res) => {
		const { id } = req.params;

		const myNote = notes.find((note) => note.id === id);

		return res.status(200).json(myNote);
	},
	updateNote: async (req, res) => {
		const { id } = req.params;
		const { note } = req.body;

		const foundIndex = notes.findIndex((x) => x.id == id);

		notes[foundIndex].note = note;
		return res.status(200).json(notes[foundIndex]);
	},
	deleteNote: async (req, res) => {
		const { id } = req.params;

		notes = notes.filter((x) => {
			return x.id != id;
		});

		return res.status(200).json(notes);
	},
};
