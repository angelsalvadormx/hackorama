const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

router.post('/', userController.save);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
