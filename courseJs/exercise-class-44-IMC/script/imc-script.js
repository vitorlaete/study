function eventButtonCalculate () {
    const button = document.querySelector(".buttonCalculate");

    button.addEventListener("mouseover", () => {
        button.classList.add("over");
    });
    
    button.addEventListener("mouseout", () => {
        button.classList.remove("over");
    });

    button.addEventListener("click", () => {
        button.classList.add("clicking");
        calculateBMI(inputWeight(), inputHeight());
    });

    button.addEventListener("mouseout", () => {
        button.classList.remove("clicking");
    });
}

eventButtonCalculate();

function inputWeight () {
    const weight = document.querySelector("#weight");

    return Number(weight.value);
}

function inputHeight () {
    const height = document.querySelector("#height");

    return Number(height.value);
}

function calculateBMI (weight, height) {
    const result = document.querySelector("#result");

    const resultBMI = weight / (height* height);

    const table = [18.5, 24.9, 29.9, 34.9, 39.9, 40];

    const imcResult = ["Underweight", "Normal weight", "Overweight", "Class I Obesity", "Class II Obesity", "Class III Obesity"];

    if (resultBMI < table[0]) {
        result.innerHTML = `BMI = ${resultBMI.toFixed(2)} kg/m² (${imcResult[0]})`;
        result.classList.add("red");
    } 
}