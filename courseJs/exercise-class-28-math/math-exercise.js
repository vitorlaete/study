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

const buttonSubmit = document.getElementById("submitButton");
const inputText = document.getElementById("entryNumber");
const divField = document.getElementById("field");

document.addEventListener("click", function (element){
    if (element.target === buttonSubmit) {
        showResults();
    }
});

inputText.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        showResults();
    }
});

function cH1 () {
    const h1 = document.createElement("h1");
    h1.setAttribute("id", "divH1");
    return h1;
}

function cP () {
    const p = document.createElement("p");
    p.setAttribute("class", "divP");
    return p;
}

function showResults () {
    divField.appendChild(cH1());
    const divH1 = document.querySelector("#divH1");
    divH1.innerHTML = " ";

    divField.appendChild(cP());
    const p = document.querySelector(".divP");
    p.innerHTML = " ";

    divH1.innerHTML += `Your typed number is: <strong>${treatNumbers()}</strong>. <br>`;
    p.innerHTML += `The square root of the number ${treatNumbers()} is: <strong>${treatNumbers() ** 0.5}</strong>. <br>`;
    p.innerHTML += `The number ${treatNumbers()} is integer? <strong>${Number.isInteger(treatNumbers())}</strong>. <br>`;
    p.innerHTML += `The number is a Nan? <strong>${Number.isNaN(treatNumbers())}</strong>. <br>`;
    p.innerHTML += `The number round to floor is: <strong>${Math.floor(treatNumbers())}</strong>. <br>`;
    p.innerHTML += `The number round to ceil is: <strong>${Math.ceil(treatNumbers())}</strong>. <br>`;
    p.innerHTML += `The number with two decimal places is: <strong>${treatNumbers().toFixed(2)}</strong>. <br>`;
}

function treatNumbers () {
    const inputNumber = Number(inputText.value);
    return inputNumber;
}
