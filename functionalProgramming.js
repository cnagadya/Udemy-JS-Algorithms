'use strict';
function medianMode(array){
  return {median: Median(array),
          mode: Mode(array)
        }
}



function Median(array){
  array.sort((a,b) =>{return a - b})
  let median, midIndex, low, high;
  if (array.length % 2 !=0){ 
    midIndex = Math.floor(array.length / 2);
    median = array[midIndex];
  }
  else{
    low = array[array.length / 2 - 1];
    high = array[array.length / 2];
    median = (low + high) / 2
  }
  return median
}

function  Mode(array){
  let modeArr = [],
      frequenciesObj ={}, 
      maxTimes = 0;
  array.forEach(element => {
    if (!frequenciesObj[element]) {
      frequenciesObj[element] = 0;}
      frequenciesObj[element]++;
    })
  for (var item in frequenciesObj){
    if (frequenciesObj[item] > maxTimes){
      maxTimes = frequenciesObj[item] ;
      modeArr = [item];
    }
    else if (frequenciesObj[item] === maxTimes){
      modeArr.push(item);
    }
    
  }
  return modeArr
}

console.log(medianMode([1,2,1,3,4,1,2,3,4,2,3,4]))
console.log(medianMode([1,2,1,3,4,1,5]))