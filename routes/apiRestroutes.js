
//Rutas de productos
const express = require('express');

const apiRestController = require('../controllers/apiRestcontroller')

// const productsApiController = require("../controllers/productsApiController")  // importa el controlador

// const productsApiRouter = express.Router();

// const checkApiKey = require('../middlewares/auth_API_KEY')

// // /products
// productsApiRouter.get('/:id?', productsApiController.getProducts);
// productsApiRouter.post('/', checkApiKey, productsApiController.createProduct);//en estas 2 líneas le decimos que NO pueden postear o borrar nadie que no tenga apikey
// productsApiRouter.delete("/",checkApiKey, productsApiController.deleteProduct); //exigimos que tengan apikey para hacer cualq de esas 2 opciones
  
//films
apiRestController.getFilms('/:title?', apiRestController.getFilms);
module.exports = apiRestController; //módulo de rutas