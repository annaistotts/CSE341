const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/anna', lesson1Controller.annaRoute);
routes.get('/', lesson1Controller.ethanRoute);

module.exports = routes;