const utils = {
  
  /*
  computeStats: function(data){

  },
  sortData: function(data, sortBy, sortOrder){

  },
*/

  filterData: function(myObject, filterType, filterValue){
    let filterArray = [];
    
    for (let i = 0 ; i < myObject.pokemon.length; i++) {

      if (filterType == "all") {
        filterArray.push(i);

      } else if (filterType == "type") {
        for (let j = 0 ; j < myObject.pokemon[i].type.length; j++) {
          if (myObject.pokemon[i].type[j] == filterValue) {
            filterArray.push(i);
          }
        }

      } else if (filterType == "weaknesses") {
        for (let j = 0 ; j < myObject.pokemon[i].weaknesses.length; j++) {
          if (myObject.pokemon[i].weaknesses[j] == filterValue) {
            filterArray.push(i);
          }
        }
      }
    }
    return filterArray;
    
  }
}
export default utils;