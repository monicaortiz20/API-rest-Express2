
require('dotenv').config()
console.log(process.env.apikey)
const fetch =  require("node-fetch");


const funcFetch = async (film) => { 
    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.apikey}t=${film}&`);
        let films = await response.json();
        return films
    } 
    catch (error) {
        console.log(error)
}
}
 
module.exports = funcFetch;