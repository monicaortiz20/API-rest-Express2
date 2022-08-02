require('dotenv').config()
console.log(process.env.URL_API_KEY, 'esta es la apikey')
const fetch =  require("node-fetch");


const funcFetch = async (film) => { 
    try {

        let response = await fetch(`https://www.omdbapi.com/?t=${film}&apikey=${process.env.URL_API_KEY}`);
        let films = await response.json();
        return films
    } 
    catch (error) {
        console.log(error)
}
}
 
module.exports = funcFetch;