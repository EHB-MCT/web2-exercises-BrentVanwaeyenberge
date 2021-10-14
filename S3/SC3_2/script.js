//API KEY: http://www.omdbapi.com/?i=tt3896198&apikey=afc53da4
//Request link : http://www.omdbapi.com/?t=Avengers&y=2012
//FULL LINK : https://www.omdbapi.com/?t=Avengers&y=2010&?i=tt3896198&apikey=afc53da4

// let baseUrl = `https://www.omdbapi.com/?t=${document.getElementById('inputTitle').placeholder}&y=2010&?i=tt3896198&apikey=afc53da4`;
let baseUrl = 'http://www.omdbapi.com/?apikey=afc53da4&t=';

window.onload = function () {

    document.getElementById("searchform").addEventListener("submit", function (event) {
        event.preventDefault();
        let url = baseUrl + document.getElementById('inputTitle').value;

        getData(url).then(result => {
            console.log(result)

            generateCard(result);

        });

    });


};

async function getData(url) {
    let response = await fetch(url);
    return await response.json();
};

function generateCard(result) {

    document.getElementById('Poster').src = result.Poster;
    document.getElementById('Title').innerText = result.Title;
    document.getElementById('Description').innerText = result.Plot;
    document.getElementById('Runtime').innerText = result.Runtime;



};