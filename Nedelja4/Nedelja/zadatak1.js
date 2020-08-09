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

let images= ['./pokemonImages/pokemon.png', './pokemonImages/pokemon.png',  './pokemonImages/pokemon.png' , './pokemonImages/pokemon.png', './pokemonImages/pokemon.png' ]

//4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

const winner = arr => arr.sort((el1, el2) => el2.karakteristike.napad - el1.karakteristike.napad).shift();

let win = winner(arrPoke)
console.log(win);


//5. За дати html направити скрипту која:

//     <div class="wrapper">
// 		<button id="prikaz">PRIKAZI POKEMONE</button>
// 		<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// 	</div>
// На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :
//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>
// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.

let wrapper = document.getElementById('wrapper');
document.body.appendChild(wrapper);

const btn = document.getElementById('prikaz');
wrapper.appendChild(btn);

const btnNajjaci = document.getElementById('pobednik');
wrapper.appendChild(btnNajjaci);

btn.addEventListener('click', (event) => {          
    arrPoke.forEach((pokemon, i) => {
        let div = document.createElement('div');
        let paragrah = document.createElement('p');
        paragrah.innerHTML = pokemon.ime 
        let img = document.createElement('img')
        img.src = images[i]
        div.appendChild(img)
        div.appendChild(paragrah)
        wrapper.appendChild(div)
    })    
})

// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад 
//(користити већ написану функцију иѕ 4. задатка) по истом формату.

btnNajjaci.addEventListener('click', (event)=>{
    let div = document.createElement('div');
    let paragrah = document.createElement('p');
    paragrah.textContent = win.ime;

    let img = document.createElement('img')
    img.src = win.src; 

    div.appendChild(paragrah)
    div.appendChild(img)
    wrapper.appendChild(div)

})
