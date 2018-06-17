// Using binary search to do recurssion
'use strict';
function search(array,key){
  array.sort((a,b)=>{return a-b})
  var midIndex = Math.floor(array.length /2),
  midElement = array[midIndex];
  if (midElement === key){
    return `${key} is at index ${midIndex} in the sorted version of the array`;
  } 

  else if (midElement < key && array.length > 1){
   return search(array.splice(midIndex,array.length),key)
  }

  else if (midElement > key && array.length > 1){
    return search(array.splice(0, midIndex,array.length),key)
  }

 else return `${key} does not exist in the array`;
}

console.log(search([1,2,1,3,4,1,5],2))
console.log(search([1,2,1,3,4,1,5],3))
console.log(search([1,2,1,3,4,1,5],5))
console.log(search([1,2,1,3,4,1,5],7))
console.log(search([1],7))