const router = require('express').Router();

const c = require('./controller');

router.route('/create').post(c.createNote);
router.route('/get').get(c.getNotes);
router.route('/get/:id').get(c.getNoteById);
router.route('/update/:id').patch(c.updateNote);
router.route('/delete/:id').delete(c.deleteNote);

module.exports = router;
