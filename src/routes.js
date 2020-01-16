const { Router } = require('express');
const DevController = require('./controllers/DevControllers');

const routes = Router();

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)


module.exports = routes;