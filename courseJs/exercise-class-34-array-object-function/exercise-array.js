const getName = document.getElementById('name');
const getLastName = document.getElementById('lastName');
const getWeight = document.getElementById('weight');
const getHeight = document.getElementById('height');
const getButton = document.getElementById('sendButton');
const divField = document.getElementById('field');
const getFactory = [];
divField.appendChild(createDiv());
const div = document.querySelector("#presentation");
let counter = 0;


function factory (name, lastName, weight, height) {
    return {
        name, lastName, weight, height
    };
}

getButton.addEventListener("click", showData);

function createDiv () {
    const div = document.createElement("div");
    div.setAttribute("id", "presentation");

    return div;
}

function createP () {
    const p = document.createElement("p");
    p.setAttribute("id", `${counter}`);

    return p;
}

function showData () {
    div.appendChild(createP());
    const p = document.getElementById(`${counter}`);
    p.setAttribute("id", `${counter++}`);

    getFactory.push(factory(getName.value, getLastName.value, getWeight.value, getHeight.value));

    const factoryLength = getFactory.length;

    p.innerHTML = `${getFactory[factoryLength-1].name}, ${getFactory[factoryLength-1].lastName}, ${getFactory[factoryLength-1].weight}, ${getFactory[factoryLength-1].height}`;
}
