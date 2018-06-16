function isPalindrome(value){
  var value = value.replace(/\W/g, '').toLowerCase(),
      valueArray = [],
      palindrome = false;
  
  for (i=0; i<value.length; i++) valueArray.push(value.charAt(i));
  if (value === valueArray.reverse().join('')) palindrome = true;

  return palindrome
}

console.log(isPalindrome("sample text"));
console.log(isPalindrome("race car"));
