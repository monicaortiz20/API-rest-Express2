const fetch = require('node-fetch');

const getFilms = async (req, res) => {
    const apikey = "dc142a52";
    if (req.params.title) {
        try {
            let response = await fetch(`https://www.omdbapi.com/?t=${req.params.title}&apikey=${apikey}`);
            let films = await response.json();
            // console.log(films)
            res.render('film', { 'film':films }); // obtenemos un objeto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).render('film.pug', { "film": {} }); //coherencia! si hay error que nos devuelva un objeto vacío
        }
    }
}



module.exports = {
    getFilms,
    }