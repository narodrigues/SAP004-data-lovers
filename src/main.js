//import { example } from './data.js';

import myObject from './data/pokemon/pokemon.js';


function createMiniCard(n) {

    //Essa parte cria uma DIV que será cada mini card
	let newCard = document.createElement("DIV");
	document.getElementById("mini-card-container").appendChild(newCard);
    newCard.id = "div" + n;
    newCard.className  = "mini-card-div";
    miniCardMouseEvents("div" + n);
    // newCard.addEventListener("click", getSelectedPokemonIndex, true);
    

	//Essa parte cria uma IMG que mostrará a imagem de cada Pokémon em cada mini card
	let newImage = document.createElement("IMG");
	newCard.appendChild(newImage);
	newImage.className  = "mini-card-image";
    newImage.src=myObject.pokemon[n].img;

    //Essa parte cria a TEXTAREA dentro da div 'newCard' criada anteriormente
    // e mostrará o nome do Pokémon
	let newText = document.createElement("TEXTAREA");
	newCard.appendChild(newText);
	newText.className  = "mini-card-text";
	newText.innerHTML = myObject.pokemon[n].name;
    newText.readOnly = "true";
    
}

for (let i = 0 ; i < 151; i++) {
	createMiniCard(i);
}



function getSelectedPokemonIndex(){
    let pokemonIndex;
    let selectedPokemon = event.currentTarget.querySelector('textarea').innerHTML;
    for (let i = 0 ; i < 151; i++) {
        if (myObject.pokemon[i].name == selectedPokemon) {
            pokemonIndex = i;
            break;
        }
    }
    pokedexLoadData(pokemonIndex);
}


function pokedexLoadData(pokemonIndex){
    let pokemonTypes = "";
    for (let i = 0 ; i < myObject.pokemon[pokemonIndex].type.length; i++) {
        pokemonTypes += myObject.pokemon[pokemonIndex].type[i] + ", ";
    }
    
}
    
    
    


//Funcao para criar eventos em cada Minicard
function miniCardMouseEvents(selectedDiv){
    let selectedMiniCard = document.getElementById(selectedDiv);
    selectedMiniCard.addEventListener("mouseover", minicardMouseOver);
    selectedMiniCard.addEventListener("mouseout", minicardMouseOut);
    selectedMiniCard.addEventListener("click", minicardMouseClick);
}

function minicardMouseOver() {
    let selectedMiniCard = event.currentTarget;
    selectedMiniCard.className = "mini-card-div-highlight";
}

function minicardMouseOut() {
    let selectedMiniCard = event.currentTarget;
    selectedMiniCard.className = "mini-card-div";
}

function minicardMouseClick() {
    getSelectedPokemonIndex();
}

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
