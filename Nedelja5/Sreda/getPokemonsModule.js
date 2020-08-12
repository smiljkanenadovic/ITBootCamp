export { getPokemons, getAbility, sortPokemons, winnerPoke}

const getPokemons = () => {
    let pokemon1 = {
        src: './pokemonImages/pokemon.png',
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
        src: './pokemonImages/pokemon.png',
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
        src: './pokemonImages/pokemon.png',
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
        src: './pokemonImages/pokemon.png',
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
        src: './pokemonImages/pokemon.png',
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

    return arrPoke;
}


const getAbility = arr =>  arr.map(el => el.sposobnosti);

const sortPokemons = arr =>  arr.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina);

const winnerPoke = arr => arr.sort((el1, el2) => el2.karakteristike.napad - el1.karakteristike.napad).shift();





