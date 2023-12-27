function clickToSend () {
    const getButton = document.getElementById('sendButton');
    
    return getButton;
}

getDiv().appendChild(createDiv());

clickToSend().addEventListener("click", showData);

function showData () {
    div.appendChild(createP());
    const p = document.getElementById(`${counter}`);
    p.setAttribute("id", `${counter++}`);

    getFactory.push(factory(captureName(), captureLastName(), captureWeight(), captureHeight()));

    const factoryLength = getFactory.length - 1;

    p.innerHTML = `${getFactory[factoryLength].name}, ${getFactory[factoryLength].lastName}, ${getFactory[factoryLength].weight}, ${getFactory[factoryLength].height}`;
}

//div of id presentation
const div = document.querySelector("#presentation");

function createP () {
    const p = document.createElement("p");
    p.setAttribute("id", `${counter}`);

    return p;
}

let counter = 0;

// Store objects
const getFactory = [];

function getDiv () {
    const divField = document.getElementById('field');

    return divField;
}

function createDiv () {
    const div = document.createElement("div");
    div.setAttribute("id", "presentation");

    return div;
}

// Functions to capture data
//-------------------------------------
function captureName () {
    const getName = document.getElementById('name');
    return getName.value;
}

function captureLastName () {
    const getLastName = document.getElementById('lastName');
    return getLastName.value;
}

function captureWeight () {
    const getWeight = document.getElementById('weight');
    return getWeight.value;
}

function captureHeight () {
    const getHeight = document.getElementById('height');
    return getHeight.value;
}
//-------------------------------------

function factory (name, lastName, weight, height) {
    return {
        name, lastName, weight, height
    };
}

