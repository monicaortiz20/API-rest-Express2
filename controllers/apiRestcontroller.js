const fetch = require('node-fetch');

const getProducts = async (req, res) => {
    if (req.params.id) {
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
            let products = await response.json(); //{}
            res.status(200).render('products', { "products": [products] }); // Pinta datos en el pug
            //el .status(200/404) te indica que ha ido todo bien (código de error - imgs gatitos)
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).render('products', { "products": [] }); // Para controlar el error en caso de que se vaya la API
            //si falla la APi, nos manda un objeto vacío (array vacío) sin objetos = pantalla en blanco
        }
    } else {
        try {
            let response = await fetch(`https://fakestoreapi.com/products`); // []
            let products = await response.json(); // []
            res.status(200).render('products', { products }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            let products = []; //esta variable es el products moradito de la línea de abajo, podemos no escribir esta línea
            res.status(404).render('products', {products:[]});
        }
    }
}


module.exports = {
    getProducts,
    }