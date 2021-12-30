class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    let halfwayIndex = Math.floor(nums.length/2);
    if(nums[halfwayIndex]==target){
      return true;
    }
    else if(nums.length==1){
      if(nums[0]==target){
        return true;
      }
      else{
        return false;
      }
    }
    else if(nums[halfwayIndex]>target){
      let firstHalf=nums.slice(0,halfwayIndex);
      return this.binarySearch(firstHalf,target);
    }
    else if(nums[halfwayIndex]<target){
      let secondHalf=nums.slice(halfwayIndex,nums.length);
      return this.binarySearch((secondHalf),target);
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;