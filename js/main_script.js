'use strict';

// Buttons
let editBut = document.getElementById("edit");
let printBut = document.getElementById("print");
let save = document.getElementById("save");
let controal = document.querySelector(".controal");

// Inputs
let clientNameInputEN = document.getElementById("clientNameEN");
let clientSinceDateInputAR = document.getElementById("clientSinceDateAR");
let recordsDateInputAR = document.getElementById("recordsDateAR");
let monyInputAfter = document.getElementById("monyAfter");
let equalInput = document.getElementById("equal");


// Felds
let refFeld = document.querySelector("header .info .med #ref");
let issuDateFeldEN = document.querySelector("header .info .med #date span:nth-child(1)");
let issuDateFeldAR = document.querySelector("header .info .med #date span:nth-child(2)");
let hursTime = document.querySelector("header .info .med #time span:nth-child(1)");
let munentsTime = document.querySelector("header .info .med #time span:nth-child(2)");
let clientNameFeldEN = document.querySelector("section .med> span:nth-child(2)");
let clientSinceDateFeldAR = document.querySelector("section .med> .date span:nth-child(2)");
let clientSinceDateFeldEN = document.querySelector("section .med> .date span:nth-child(1)");
let accountFeldNum = document.querySelector("section .med> span:nth-child(4)");
let IBAN = document.querySelector("section .med> span:nth-child(5)");
let recordsDateFeldEN = document.querySelector("section .med> .date2 span:nth-child(1)");
let recordsDateFeldAR = document.querySelector("section .med> .date2 span:nth-child(2)");
let monyFeldBefor = document.querySelector("section .med> span:nth-child(7)");
let monyFeldAfter = document.querySelector("section .med> span:nth-child(8)");
let equalFeld = document.querySelector("section .med> span:nth-child(9)");

printBut.onclick = function(e) {
    e.preventDefault();
    window.print();
}


let day = rundomNum(1, 1, 30);
let monthe = rundomNum(1, 1, 12);
let hure = rundomNum(1, 8, 15);
let eving = (hure) => {
    switch (hure) {
        case 13:
            return "01"+"م";
            break;
        case 14:
            return "02"+"م";
            break;
        case 15:
            return "03"+"م";
            break;
    }
}
munentsTime.textContent = `${hure > 12? eving(hure) : hure > 9? hure+"ص" : "0"+hure+"ص"}`;
hursTime.textContent = `${rundomNum(1, 1, 5)}${rundomNum(1, 0, 9)}`;
refFeld.textContent = `${rundomNum(1, 1, 9)}${rundomNum(6, 0, 9)}`;
clientSinceDateFeldEN.textContent = `${day > 9? day : "0"+day}/${monthe > 9? monthe : "0"+monthe}/20${rundomNum(1, 16, 21)}`;
recordsDateFeldEN.textContent = `${new Date().getDate()}/${(new Date().getMonth() + 1)}/${new Date().getFullYear()}`;
accountFeldNum.textContent = `44${rundomNum(2, 0, 9)}0001${rundomNum(3, 0, 9)}60800${rundomNum(5, 0, 9)}`;
IBAN.textContent = `SA138${rundomNum(8, 0, 9)}8060100${rundomNum(5, 0, 9)}`;

let equals = `${rundomNum(1, 80, 120)},${rundomNum(1, 1, 9)}${rundomNum(2, 0, 9)}.${rundomNum(2, 0, 9)}`;
monyFeldBefor.textContent = equals;
equalFeld.textContent = equals;


function rundomNum(ittrate, from, to) {
    let newnum = [];
    

    for (let index = 0; index < ittrate; index++) {
        newnum.push((Math.floor(Math.random() * (to - from + 1)) + from))
    }
    return +newnum.join("");
}

function rundomChar() {
    let char = "";
    switch (Math.floor(Math.random()*6)) {
        case 0:
            char = "a" +""+ Math.floor(Math.random()*10);
            break;
        case 1:
            char = "b" +""+ Math.floor(Math.random()*10);
            break;
        case 2:
            char = "c" +""+ Math.floor(Math.random()*10);
            break;
        case 3:
            char = "d" +""+ Math.floor(Math.random()*10);
            break;
        case 4:
            char = "e" +""+ Math.floor(Math.random()*10);
            break;
        case 5:
            char = "f" +""+ Math.floor(Math.random()*10);
            break;
        case 6:
            char = "g" +""+ Math.floor(Math.random()*10);
            break;
    }
    return char;
}

 save.onclick = function(e) {
    e.preventDefault();
    controal.style.display = "none";
    clientNameFeldEN.textContent= clientNameInputEN.value.trim().toUpperCase();
    clientSinceDateFeldAR.textContent = clientSinceDateInputAR.value.trim();
    recordsDateFeldAR.textContent = recordsDateInputAR.value.trim();
    issuDateFeldAR.textContent = recordsDateInputAR.value.trim();
    monyFeldBefor.textContent = equalInput.value.trim();
    monyFeldAfter.textContent = monyInputAfter.value.trim();
    equalFeld.textContent = equalInput.value.trim();

 }

 editBut.onclick = function(e) {
    e.preventDefault();
    controal.style.display = "flex";
    clientNameInputEN.value = clientNameFeldEN.textContent.trim();
    clientSinceDateInputAR.value = clientSinceDateFeldAR.textContent.trim();
    recordsDateInputAR.value = recordsDateFeldAR.textContent.trim();
    // monyInputBefor.value = monyFeldBefor.textContent.trim();
    monyInputAfter.value = monyFeldAfter.textContent.trim();
    equalInput.value = equalFeld.textContent.trim();
    
}