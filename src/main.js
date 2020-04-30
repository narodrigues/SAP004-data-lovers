import utils from './data.js';

import myObject from './data/pokemon/pokemon.js';

let closeBtn = document.getElementsByClassName("close-btn")[0];
let closeBtn2 = document.getElementsByClassName("close-btn")[1];
let viewMore = document.getElementById("view-more");
let viewLess = document.getElementById("view-less");

closeBtn.addEventListener("click", close);
closeBtn2.addEventListener("click", close);
viewMore.addEventListener("click", changeDisplay);
viewLess.addEventListener("click", changeDisplay);

function close(){
    card.style.display = "none";
}

function changeDisplay(e){
    if(e.target.id == "view-more"){
        document.getElementById("card-first-half").style.display = "none";
        document.getElementById("card-second-half").style.display = "block";
    } else {
        document.getElementById("card-second-half").style.display = "none";
        document.getElementById("card-first-half").style.display = "block";
    }
}

function reset(){
    document.getElementById("card-pokemon-img").innerHTML = null;
    document.getElementsByClassName("pokemon-type")[0].innerHTML = null;
    document.getElementById("card-pokemon-evolutions").innerHTML = null;
    document.getElementsByClassName("pokemon-type")[1].innerHTML = null;
}

function minicardMouseClick(e){
    reset();

    document.getElementById("card").style.display = "block";
    document.getElementById("card-first-half").style.display = "block";
    document.getElementById("card-second-half").style.display = "none";

    let selectedPokemonNum = e.currentTarget.id.slice(7);
    let selectedPokemon = myObject.pokemon[Number(selectedPokemonNum)];

    document.getElementById("pokemon-name").innerHTML = selectedPokemon.name 
    document.getElementById("pokemon-number").innerHTML = selectedPokemon.num;

    let newImg = document.createElement("img");
    document.getElementById("card-pokemon-img").appendChild(newImg);
    newImg.className = "pokemon-img";
    newImg.src = selectedPokemon.img;
    
    for(let type of selectedPokemon.type){
        let pokemonType = document.createElement("p");
        document.getElementsByClassName("pokemon-type")[0].appendChild(pokemonType);
        pokemonType.innerHTML = type;
        pokemonType.id = type.toLowerCase(type);
    }

    const evolutions = [];

    if("prev_evolution" in selectedPokemon){
        selectedPokemon.prev_evolution.forEach(function (pe){
            evolutions.push(pe.num);
        });
    }

    evolutions.push(selectedPokemon.num);

    if("next_evolution" in selectedPokemon){
        selectedPokemon.next_evolution.forEach(function (ne){
            evolutions.push(ne.num);
        });
    }

    for(let i = 0; i < evolutions.length; i++){

        const evolutionObj = myObject.pokemon.find(function(pokemonObj){
            return pokemonObj.num == evolutions[i];
        });

        let evolutionFigure = document.createElement("figure");
        evolutionFigure.className = "pokemon-evolutions";

        let evolutionImg = document.createElement("img");
        evolutionFigure.appendChild(evolutionImg);
        evolutionImg.className = "pokemon-img pokemon-evolutions-img";
        evolutionImg.src = evolutionObj.img;

        let evolutionName = document.createElement("figcaption");
        evolutionFigure.appendChild(evolutionName);
        evolutionName.className = "pokemon-infos pokemon-evolution-name";
        evolutionName.innerHTML = evolutionObj.name;

        document.getElementById("card-pokemon-evolutions").appendChild(evolutionFigure);
    }

    let pokemonWeaknessTitle = document.createElement("h1");
    document.getElementsByClassName("pokemon-type")[1].appendChild(pokemonWeaknessTitle);
    pokemonWeaknessTitle.className = "pokedex-titles";
    pokemonWeaknessTitle.innerHTML = "Fraquezas";

    for(let weaknessType of selectedPokemon.weaknesses){
        let pokemonWeaknessType = document.createElement("p");
        document.getElementsByClassName("pokemon-type")[1].appendChild(pokemonWeaknessType);
        pokemonWeaknessType.innerHTML = weaknessType;
        pokemonWeaknessType.id = weaknessType.toLowerCase(weaknessType);
    }

    document.getElementById("candy-p").innerHTML = selectedPokemon.candy_count + " candys";
}