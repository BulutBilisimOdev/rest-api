const { v4: uuidv4 } = require('uuid');

let notes = [];

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
	getNoteById: async (req, res) => {},
	updateNote: async (req, res) => {},
	deleteNote: async (req, res) => {},
};
