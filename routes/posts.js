const express = require('express');
const router = express.Router();
const postController = require('../controller/PostController');

router.post('/', postController.save);
router.get('/', postController.getAll);
router.get('/:id', postController.getById);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);

module.exports = router;
