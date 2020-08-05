//1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// Даље, направити низ од ових објеката

let pokemon1 = {
    ime: 'Aurorus',
    vrsta: 'poison',
    sposobnosti : ['Dry Skin', 'Iron Fist', 'Magma Armor'],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 50
    }
}
let pokemon2 = {
    ime: 'Bellossom',
    vrsta: 'grass',
    sposobnosti : ['Healer', 'Chlorophyll', 'Neutralizing Gas'],
    karakteristike: {
        napad: 20,
        odbrana: 40,
        brzina: 90
    }
} 
let pokemon3 = {
    ime: 'Bonsly',
    vrsta: 'ghost',
    sposobnosti : ['Shadow Tag', 'Iron Fist', 'Rivalry'],
    karakteristike: {
        napad: 95,
        odbrana: 65,
        brzina: 80
    }
} 
let pokemon4 = {
    ime: 'Charjabug',
    vrsta: 'bug',
    sposobnosti : ['Blaze', "Corrosion", 'Poison Heal'],
    karakteristike: {
        napad: 70,
        odbrana: 20,
        brzina: 30
    }
}
let pokemon5 = {
    ime: 'Dracovish',
    vrsta: 'dragon',
    sposobnosti : ['Aftermath', "Aroma Veil", 'Sweet Veil'],
    karakteristike: {
        napad: 85,
        odbrana: 75,
        brzina: 100
    }
} 
var arrPoke = [];
arrPoke.push(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5);
//console.log(arrPoke);



// 2.Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

const ability = arr => arr.map(el => el.sposobnosti)
let abPoke = ability(arrPoke);
//console.log(abPoke);



//3. Сортирати покемоне по брзини, растуће.

arrPoke.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina)
console.log(arrPoke);