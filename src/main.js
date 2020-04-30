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

