function frequencyCounter(word) {
  // Insert code here;
  let ourWord={
  }
  for(let i=0; i<word.length;i++){
    
    if(word[i] in ourWord){
      ourWord[word[i]]++;
    }
    else{
      ourWord[word[i]]=1;
    }
  }
  return ourWord;
}

// Do not edit this line;
module.exports = frequencyCounter;