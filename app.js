import express, {json} from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

const BASE_URL = "https://pokeapi.co/api/v2";

app.get("/", async (req, res) => {
    res.send({status: 200, message : "Welcome to Node JS"});
});


app.get("/getPokemons", async (req, res) => {
    try {
        let pokemons = await fetch(`${BASE_URL}/pokemon/`);
        pokemons = await pokemons.json();
        res.send(pokemons)
    } catch (e) {
        res.send({status: 404, message: "Not Found"});
    }
});

app.get("/getPokemonDetails/:pokemonId", async (req, res) => {
    try {
        const pokemonId = req.params.pokemonId;
        let pokemon = await fetch(`${BASE_URL}/pokemon/${pokemonId}`);
        pokemon = await pokemon.json();
        res.send(pokemon)
    } catch (e) {
        res.send({status: 404, message: "Not Found"});
    }
});

app.get("/getPokemonGenerations", async (req, res) => {
    try {
        let generation = await fetch(`${BASE_URL}/generation`);
        generation = await generation.json();
        res.send(generation)
    } catch (e) {
        res.send({status: 404, message: "Not Found"});
    }
})

app.listen(PORT, () => console.log("SERVER STARTED"));