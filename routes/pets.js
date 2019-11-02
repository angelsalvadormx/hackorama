const express = require('express');
const router = express.Router();
const petController = require('../controller/PetController');

router.post('/', petController.save);
router.get('/', petController.getAll);
router.get('/:id', petController.getById);
router.put('/:id', petController.update);
router.delete('/:id', petController.delete);

module.exports = router;
