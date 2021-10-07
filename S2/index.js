import * as Service from "./model/Service.js";

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

function onVoteClick(event) {
    let pokemon = _.find(currentPokemons, o => {
        return o.pokemonData.id == event.srcElement.id.substring(1);
    });

    Service.sendVote(pokemon, currentUser).then(pokemonName => {
        document.getElementById("voteResult").style.display = "block";
        document.getElementById("voteResultText").innerHTML = `You voted for ${pokemonName.toUpperCase()}!`;
        getRandomPokemons();
    });
}

//FINAL