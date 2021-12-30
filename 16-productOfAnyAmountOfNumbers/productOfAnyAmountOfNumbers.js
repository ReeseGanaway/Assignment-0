function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product=1;
  for(let i=0;i<args.length;i++){
    product=product*args[i];
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;