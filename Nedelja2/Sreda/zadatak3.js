/*
zadatak3.js
Направити променљиву која има вредност неког броја (цео број)
Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
Ако није, Број _ није дељив са 3 */


let x = 7;

if(x % 3 == 0) {
    console.log(`Number ${x} is divisible by 3`);
} else {
    console.log(`The number ${x} is not divisible by 3`);
}