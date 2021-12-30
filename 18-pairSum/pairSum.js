function pairSum(nums, target) {
  // Insert code here;
  if(nums.length<=1){
    throw "The array must have more numbers!";
  }
  let sum=0;
  for(let i=0; i<nums.length-1;i++){
    for(let j=i+1; j<nums.length;j++){
      if(nums[i]+nums[j]==target){
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;