const inputDrakonakrys = document.getElementById('Drakonakrys');
const inputAPDA130 = document.getElementById('APDA130');
const inputZe = document.getElementById('Zepequenooo357');
const inputKonAK47 = document.getElementById('KonAK47');
const btn = document.getElementById('btn');
const scoreDR = document.querySelector('.scoreD');
const scoreAP = document.querySelector('.scoreAP');
const scoreZE = document.querySelector('.scoreZE');
const scoreKO = document.querySelector('.scoreKO');

let nbPartie = document.getElementById('nbParties')

let count = 0;

let scoreDRA = 0;
let scoreAPI = 0;
let scoreZEPQ = 0;
let scoreKONA = 0;




btn.addEventListener('click', () => {
 
    scoreDRA = Number(inputDrakonakrys.value) + scoreDRA;
    scoreAPI = Number(inputAPDA130.value) + scoreAPI;
    scoreZEPQ = Number(inputZe.value) + scoreZEPQ;
    scoreKONA = Number(inputKonAK47.value) + scoreKONA;

    scoreDR.innerText = scoreDRA;
    scoreAP.innerText = scoreAPI;
    scoreZE.innerText = scoreZEPQ;
    scoreKO.innerText = scoreKONA;

    
    count++;
    
    nbPartie.innerHTML = count;


})

