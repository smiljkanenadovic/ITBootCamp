import { getPokemons, getAbility, sortPokemons, winnerPoke } from './getPokemonsModule.js'
import { showPoke } from './showPokemonsModule.js'

const pokemons = getPokemons();
console.log(pokemons);

const ability = getAbility(pokemons);
console.log(ability);

const sort = sortPokemons(pokemons);
console.log(sort);

const winner = winnerPoke(pokemons);
console.log(winner);

showPoke(pokemons, winner);

