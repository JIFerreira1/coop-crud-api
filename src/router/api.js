const express = require('express');
const router = express.Router();

const routes = require('../controller/store')

router.get('/store', routes.getAll);
router.get('/store/:id', routes.getOne);
router.put('/store/:id', routes.update);
router.post('/store/create', routes.create);
router.delete('/store/:id', routes.delete);

module.exports = router;