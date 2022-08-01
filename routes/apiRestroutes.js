const ApiRestController = require("../controllers/apiRestcontroller");
const express= require("express")
const routes = express.Router()


routes.get("/:title?", ApiRestController.getFilms)

module.exports = routes;