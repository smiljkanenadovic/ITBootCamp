export { showPoke }

const showPoke = (arr, winner) => {

    let images= ['./pokemonImages/pokemon.png','./pokemonImages/pokemon.png','./pokemonImages/pokemon.png' ,'./pokemonImages/pokemon.png','./pokemonImages/pokemon.png']
    let wrapper = document.getElementById('wrapper');
    document.body.appendChild(wrapper);

    const btn = document.getElementById('prikaz');
    wrapper.appendChild(btn);

    const btnNajjaci = document.getElementById('pobednik');
    wrapper.appendChild(btnNajjaci);

    btn.addEventListener('click', (event) => {          
        arr.forEach((pokemon, i) => {
            let div = document.createElement('div');
            let paragrah = document.createElement('p');
            paragrah.innerHTML = pokemon.ime ;
            let img = document.createElement('img');
            img.src = images[i];
            div.appendChild(img);
            div.appendChild(paragrah);
            wrapper.appendChild(div);
        })    
    })
    btnNajjaci.addEventListener('click', (event)=>{
        let div = document.createElement('div');
        let paragrah = document.createElement('p');
        paragrah.textContent = winner.ime;
        let img = document.createElement('img');
        img.src = winner.src; 
        div.appendChild(paragrah);
        div.appendChild(img);
        wrapper.appendChild(div);
    })
}