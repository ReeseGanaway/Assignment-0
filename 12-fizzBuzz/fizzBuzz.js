function fizzBuzz(start, end) {
  // Insert code here;
  let newArr=[];
  let currentNum=start;
  let index=0;
  while(currentNum<=end){
    if(currentNum%3==0 && currentNum%5==0){
      newArr[index]="FizzBuzz";
      currentNum++;
    }
    else if(currentNum%3==0){
      newArr[index]="Fizz";
      currentNum++;
    }
    else if(currentNum%5==0){
      newArr[index]="Buzz";
      currentNum++;
    }
    else{
      newArr[index]=currentNum;
      currentNum++;
    }
    
    index++;
  }
  return newArr;
}

// Do not edit this line;
module.exports = fizzBuzz;