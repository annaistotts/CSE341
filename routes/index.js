const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.annaRoute);
routes.get('/ethan', lesson1Controller.ethanRoute);

module.exports = routes;