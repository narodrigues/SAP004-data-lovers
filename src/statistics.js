import utils from './data.js';
import myObject from './data/pokemon/pokemon.js';

let calc = utils.computeStats(myObject.pokemon);

for(let key in calc){
  let type = document.createElement("h1");
  type.innerHTML = key;

  let maxCont = document.createElement("div");
  maxCont.className = "maxContDiv";

  let percentCont = document.createElement("div");
  percentCont.className = "percentage";
  percentCont.id = key.toLowerCase(key);
  percentCont.style.width = calc[key] + "%";

  let paragraph = document.createElement("p");
  percentCont.append(paragraph);
  paragraph.innerHTML = calc[key] + "%";
  
  document.getElementById("stats-container").append(type, maxCont);
  maxCont.append(percentCont);
}