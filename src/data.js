const utils = {

  computeStats: function(data){

  },

  filterData: function(data, condition){

  },

  sortData: function(data, sortBy, sortOrder){
    switch(sortOrder){
      case "a-z":
        data.sort(function(pokemonA, pokemonB){
          if(pokemonA[sortBy] > pokemonB[sortBy]){
            return 1;
          } else {
            return -1;
          }
        });
        break;
      case "z-a":
        data.sort(function(pokemonA, pokemonB){
          if(pokemonA[sortBy] < pokemonB[sortBy]){
            return 1;
          } else {
            return -1;  
          }
        });
        break;
      case "1-151":
        data.sort(function(pokemonA, pokemonB){
          return pokemonA[sortBy] - pokemonB[sortBy];
        });
        break;
      case "151-1":
        data.sort(function(pokemonA, pokemonB){
          return pokemonB[sortBy] - pokemonA[sortBy];
       });
       break;
   }
  }
}
export default utils;