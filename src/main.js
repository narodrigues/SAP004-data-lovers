//import { example } from './data.js';

import myObject from './data/pokemon/pokemon.js';

// Essa função cria os mini cards e atribui uma imagem e um label para cada um deles, 
// utilizando um looping para criar cada mini card em cada iteração;
// Atribuindo também um id, uma classe e chama uma função com vários evento a cada mini card dinamicamente
 
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

// Esse bloco de funções é o conjunto de funções de eventos que vão ocorrer no mini card
// A função miniCardMouseEvents agrega todos as funções com cada evento unitário que está será apliacado no mini card
// 

// Função para criar eventos em cada mini card
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

// Essa função vai reconhecer qual Pokémon foi clicado
// Ela faz isso utilizando o valor do text area (nome do Pokémon)
// Ela utiliza o valor do text area em um looping em cada Pokémon para reconhecer o index do Pokémon clicado,
// Após isso ela utiliza o index encontrado para carregar a Pokédex  (função pokedexLoadData)
//

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

// Para cada propriedade do objeto, vai ter um looping que você vai fazer para efetivamente criar e 
// trazer as informações para a Pokedex, então você só vai adaptar o código a informação que realmente vai ser trazida na Pokedex
// looping por cada 'type' do Pokémon, adicionando cada item
// na variável types, e depois colocar isso no label 'pokemonType'


function pokedexLoadData(pokemonIndex){
    let pokemonTypes = "";
    for (let i = 0 ; i < myObject.pokemon[pokemonIndex].type.length; i++) {
        pokemonTypes += myObject.pokemon[pokemonIndex].type[i] + ", ";
    }
    
}


