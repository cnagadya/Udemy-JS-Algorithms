function fizzBuzz(num){
  for (var x=1; x<=num; x++){
    if (x%15 == 0){
      console.log("fizzBuzz");
    }
    else if (x%3 == 0){
      console.log("fizz");
    }
    else if (x%5 == 0){
      console.log("buzz");
    }
    else{
      console.log(x);
    }

  }

}

fizzBuzz(20);