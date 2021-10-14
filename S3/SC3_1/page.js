document.getElementById("inputField").addEventListener("submit", function (event) {
    event.preventDefault();
    compareNumbers(magicNumber, document.getElementById('value').value);
});


let magicNumber = Math.floor(Math.random() * 20);
console.log(magicNumber);

function compareNumbers(magicNumber, value) {
    if (magicNumber == value) {
        alert('That is correct');
        document.location.reload(true);
    } else {
        alert('Try again');
        console.log(value);
        document.location.reload(true);
    }

};