// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу 


 let cena = 1200;
 let precnik = 60;

 let poluprecnik = precnik / 2;
 let cenaPoCm;

 let povrsina = Math.round(Math.pow(poluprecnik, 2) * Math.PI);

 cenaPoCm = cena / povrsina;
 console.log(`Cena pizze je ${parseFloat(cenaPoCm).toFixed(2)}din po cm², za cenu pizze od ${cena}din sa precnikom od ${precnik}cm.`);

 