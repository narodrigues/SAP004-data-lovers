import utils from './data.js';
import myObject from './data/pokemon/pokemon.js';

/*window.addEventListener("onload", function(){
  let main = document.querySelector("main");
  if(main.id.contains("statistics-main")){
      main.innerHTML = utils.computeStats(myObject.pokemon);
  }
});*/

let func = utils.computeStats(myObject.pokemon);
console.log(func);
console.log(func["Grass"]);

    
for(let key in func){
  let title = document.createElement("h1");
  /*document.getElementById("statistics-container").append(title);*/
  title.innerHTML = key;

  let maxCont = document.createElement("div");
  maxCont.className = "maxContDiv";

  let percentCont = document.createElement("div");
  percentCont.className = "percentage percent" + func[key];

  let paragrafo = document.createElement("p");
  percentCont.append(paragrafo);
  paragrafo.innerHTML = func[key] + "%";
  
  /*for(let x = 0; x < key.length; x++){
    let percentCont = document.createElement("div");
    document.getElementsByClassName("teste")[x].append(percentCont);
  }*/
  /**/

  document.getElementById("statistics-container").append(title, maxCont);
  maxCont.append(percentCont);
}
