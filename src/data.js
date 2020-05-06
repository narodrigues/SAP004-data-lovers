const utils = {

  /*computeStats: function(data){

  },

  filterData: function(data, condition){

  },*/

  sortData: function(data, sortBy, sortOrder){
    switch(sortOrder){
      case "a-z":
        return data.sort(function(pokemonA, pokemonB){
          if(pokemonA[sortBy] > pokemonB[sortBy]){
            return 1;
          } 
          return -1; 
        });
      case "z-a":
        return data.sort(function(pokemonA, pokemonB){
          if(pokemonA[sortBy] < pokemonB[sortBy]){
            return 1;
          }
          return -1;  
        });
      case "1-151":
        return data.sort(function(pokemonA, pokemonB){
          return pokemonA[sortBy] - pokemonB[sortBy];
        });
      case "151-1":
        return data.sort(function(pokemonA, pokemonB){
          return pokemonB[sortBy] - pokemonA[sortBy];
        });
    }
  }
}
export default utils;