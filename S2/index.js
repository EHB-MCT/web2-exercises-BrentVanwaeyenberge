import * as Service from "./model/Service.js";
import Team from "./model/Team.js";

let currentPokemons = [];
let currentUser = JSON.parse(window.localStorage.getItem("user"));

if (!window.localStorage.getItem("user")) {
    window.location.replace("login.html");
} else {
    // window.localStorage.removeItem("user");
}

getRandomPokemons();

function getRandomPokemons() {
    Service.getRandomPokémon(151).then(pokemons => {
        let container = document.getElementById("pokeContainer");

        currentPokemons = pokemons;

        container.innerHTML = "";

        pokemons.forEach(pokemon => {
            // container.append(pokemon.generateHTML());
            container.innerHTML += pokemon.generateHTML();
        });
        pokemons.forEach(pokemon => {
            document.getElementById(`b${pokemon.pokemonData.id}`).onclick = onVoteClick;
        });
    });
}
let Team1 = new Team();

function onVoteClick(event) {
    let pokemon = _.find(currentPokemons, o => {
        return o.pokemonData.id == event.srcElement.id.substring(1);
    });


    addPokemon(pokemon);
}

function addPokemon(pokemon) {
    if (Team1.roster.length < 6) {
        Team1.roster.push(pokemon.pokemonData.name)
        console.log('Added to team');
        console.log(Team1);

    } else {
        console.log('Team is full');
    }

};


//FINAL