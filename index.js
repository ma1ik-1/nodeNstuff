const { startDate } = require('./now.js');

console.log(startDate);

const { calc } = require("./calc.js")

//console.log(calc.add)

const cowsay = require("cowsay")

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

const axios = require("axios")

//const poke = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");

const poke = axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then(({data}) => console.log("fav", data))

//console.log("fav: ", poke.data)