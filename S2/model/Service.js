import * as PokemonModule from "./Pokemon.js";

const pokemonBaseUrl = "https://pokeapi.co/api/v2/pokemon";


export function getRandomPokémon(amount) {

    let Pokemons = [],
        myPromise = new Promise((resolve, reject) => {
            fetch(_createPokemonFetchUrl(amount, 0)).then(response => {
                response.json().then(data => {
                    data.results.forEach(result => {
                        _fetchPokemonByUrl(result.url).then(response2 => {
                            response2.json().then(pokemonData => {
                                Pokemons.push(new PokemonModule.Pokemon(pokemonData));
                                if (Pokemons.length == amount) {
                                    resolve(Pokemons);
                                }
                            });
                        });
                    });
                });
            });
        });

    return myPromise;
}

export function getPokemoneById(id) {
    let url = `${pokemonBaseUrl}/${id}/`,
        myPromise = null;

    myPromise = new Promise((resolve, reject) => {
        _fetchPokemonByUrl(url).then(response => {
            response.json().then(pokemonData => {
                resolve(new PokemonModule.Pokemon(pokemonData));
            });
        });
    });

    return myPromise;
}



function _getRandomOffset(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function _createPokemonFetchUrl(amount, offset) {
    return `${pokemonBaseUrl}?limit=${amount}&offset=${offset}`;
}

function _fetchPokemonByUrl(url) {
    return fetch(url);
}


//FINAL