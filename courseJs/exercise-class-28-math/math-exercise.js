/*
Get a number, and show:
* The number;
* Square root;
* If is integer or not;
* If is Nan;
* Round to floor;
* Round to ceil;
* Show the number with two decimal places
*/

// document.addEventListener(function (element) {
//     const wElement = element.target;
    
// });

const divParent = document.getElementById("field");

function fInputText () {
    const inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", "boxInformation");
    inputText.setAttribute("placeholder", "Type your number here");
    
    divParent.appendChild(inputText);
}

const h1 = document.createElement("h1");
h1.innerHTML = `Seu número é: ${}`;

divParent.appendChild(h1);