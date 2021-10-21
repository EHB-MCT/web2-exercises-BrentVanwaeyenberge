import Cleave from "cleave.js";


let form = document.getElementById("form1");

window.onload = (event) => {
    event.preventDefault();
    console.log('yuuu');
};

form.addEventListener("submit", function (event) {
    console.log('Succes');
    event.preventDefault()
    generateCard()
});

var fnameCleave = new Cleave('.fname', {
    prefix: 'Student',
    delimiter: '-',
    blocks: [7, 50],
    uppercase: true
});

var bdayCleave = new Cleave('.bday', {
    date: true,
    delimiter: '/',
    datePattern: ['d', 'm', 'Y']
});

var rrnCleave = new Cleave('.rrn', {
    blocks: [2, 2, 2, 3, 2],
    delimiters: ['.', '.', '-', '.'],
    uppercase: true
});

var pnumCleave = new Cleave('.pnum', {
    phone: true,
    phoneRegionCode: 'BE'
});




function generateCard() {
    let html = `<div>
    <div class="card">
    <h1>This is Brent</h1>
    <p>
        Born on *date* is now *age* old. The governement tracks him using *rrn*
    </p>
    <button>Call him *pnum*</button>
</div>
    </div>`;

    return html;
}