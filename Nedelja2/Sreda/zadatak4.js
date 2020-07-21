/*
zadatak4.js
Исписати првих 1000 бројева дељивих са 5*/

for (let i = 1; i <= 5000; i++) {    
    if (i % 5 == 0) { 
        console.log(`Numbers divisible by 5: ${i}`); 
    }
}