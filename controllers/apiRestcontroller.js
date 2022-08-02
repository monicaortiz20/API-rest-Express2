const funcFetch = require('../utils/apiFetch');

const getFilms = async (req, res) => {
    if (req.params.title) {
        try {
            const films = await funcFetch(req.params.title)
            res.status(200).json(films);
        }catch (error) {
                console.log(`ERROR: ${error.stack}`);
                res.status(404).json({"message":"pelicula no encontrada"});
            }
        }
    }

    module.exports = {getFilms};