// const btnCadabra = document.getElementById('btnCadabra')
// btnCadabra.addEventListener("click", function() {
//     console.log('pudim')
// })

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}?limit=${limit}`


function convertPokemonToLi(pokemon, pokemonId) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail ">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/other/dream-world/${pokemonId+1}.svg" alt=${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonOl = document.getElementById('pokemonList')
// console.log(pokemonOl)

pokeApi.getPokemons().then((pokemonList = []) => { 
    pokemonOl.innerHTML += pokemonList.map(convertPokemonToLi).join('')
})
    