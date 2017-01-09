"use strict";

module.exports = {

  plusOneSum: function(arr){

    let total = 0;

    for(let i = 0; i< arr.length; i++){

      if(typeof arr[i] === 'number'){
        total += arr[i] + 1;
      }
    }
    return total;
  }

};
