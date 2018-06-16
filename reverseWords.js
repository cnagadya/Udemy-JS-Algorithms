function reverseWords(string){

  var stringArr = string.split(' '),
      newArr =[];
      
  stringArr.forEach(element => {
    newWord = ""
    for (i = element.length; i > 0; i--){
     newWord += element[i - 1] 
     console.log(element, i)
  }
  newArr.push(newWord)
  });

  return newArr.join(' ')
}

console.log(reverseWords("This is a string"));