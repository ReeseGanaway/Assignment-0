function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let newSet=new Set();
  let tempNum=0;
  for(let i=0;i<args.length;i++){
    let iterator=args[i].values();
    for(let j=0;j<args[i].size;j++){
      tempNum=iterator.next().value;
      if(!newSet.has(tempNum)){
        newSet.add(tempNum);
      }
    }
  }
  return newSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;