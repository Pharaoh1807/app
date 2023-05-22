const express = require('express');
const route = express.Router();
const courseController = require('../app/controllers/CoursesController');

route.get('/create', courseController.create);
route.post('/store', courseController.store);
route.get('/:slug', courseController.show);


module.exports = route;
