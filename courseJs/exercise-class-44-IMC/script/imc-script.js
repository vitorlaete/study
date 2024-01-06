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

    clear();
    
    const result = document.querySelector("#result");
    
    const resultBMI = weight / (height* height);
    
    const table = [18.5, 24.9, 29.9, 34.9, 39.9, 40];
    
    const imcResult = ["Underweight", "Normal weight", "Overweight", "Class I Obesity", "Class II Obesity", "Class III Obesity"];
    
    
        if (weight === 0 && height === 0) {    
            result.classList.add("red");
            return result.innerHTML = "Invalid values.";
        } else if (weight === 0) {
            result.classList.add("red");
            return result.innerHTML = "Weight is invalid.";
        } else if (height === 0) {
            result.classList.add("red");
            return result.innerHTML = "Height is invalid.";
        }
    
    if (resultBMI < table[0]) {
        result.innerHTML = `BMI = ${resultBMI.toFixed(2)} kg/m² (${imcResult[0]})`;
        result.classList.add("red");
    } else if (resultBMI < table[1]) {
        result.innerHTML = `BMI = ${resultBMI.toFixed(2)} kg/m² (${imcResult[1]})`;
        result.classList.add("green");
    } else if (resultBMI < table[2]) {
        result.innerHTML = `BMI = ${resultBMI.toFixed(2)} kg/m² (${imcResult[2]})`;
        result.classList.add("yellow");
    } else if (resultBMI < table[3]) {
        result.innerHTML = `BMI = ${resultBMI.toFixed(2)} kg/m² (${imcResult[3]})`;
        result.classList.add("red");
    } else if (resultBMI < table[4]) {
        result.innerHTML = `BMI = ${resultBMI.toFixed(2)} kg/m² (${imcResult[4]})`;
        result.classList.add("red");
    } else if (resultBMI > table[5]) {
        result.innerHTML = `BMI = ${resultBMI.toFixed(2)} kg/m² (${imcResult[5]})`;
        result.classList.add("red");
    }
}

function clear () {
    document.querySelector("#result").innerHTML = "";
    document.querySelector("#result").className = "";
    document.querySelector("#weight").value = "";
    document.querySelector("#height").value = "";
}
