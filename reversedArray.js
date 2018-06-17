'use strict';
//returns the inserted array reversed without creating a new array
function reversedArray(array){
  let length = array.length 
  for (var i = 0; i < length / 2; i++){
    var temp = array[i];
    array[i] = array[length -1 -i];
    array[length -1 -i] = temp;
    // console.log(array);
  }
  return array;
}

console.log(reversedArray([1,2,3,4,5]));