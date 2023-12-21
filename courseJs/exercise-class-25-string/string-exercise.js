const fullName = prompt('Digite seu nome completo aqui: ');
const numberOfLetters = fullName.split(' ').join('').length;

const divField = document.getElementById('field');
divField.innerHTML += `Seu nome completo é: <strong>${fullName}</strong>.<br>`;

(numberOfLetters === 1) ? divField.innerHTML +=`Ele tem: 1 letra.<br>` : divField.innerHTML += `Seu nome tem: <strong>${numberOfLetters}</strong> letras.<br>`;

divField.innerHTML += `A segunda letra do seu nome é: <strong>${fullName[1]}</strong>.<br>`;
divField.innerHTML += `O primeiro índice que contém a letra 'a' no seu nome é: <strong>${fullName.indexOf('a')+1}</strong>.<br>`;
divField.innerHTML += `O último índice com a letra 'a' no seu nome é: <strong>${fullName.lastIndexOf('a')+1}</strong>.<br>`;
divField.innerHTML += `As últimas 3 letras do seu nome são: <strong>${fullName.slice(-3, fullName.length)}</strong>.<br>`;
divField.innerHTML += `As palavras do seu nome são: <strong>${fullName.split(' ')}</strong>.<br>`;
divField.innerHTML += `Seu nome com letras maiúsculas fica assim: <strong>${fullName.toUpperCase()}</strong>.<br>`;
divField.innerHTML += `Seu nome com letras minúscula fica assim: <strong>${fullName.toLowerCase()}</strong>.`;
