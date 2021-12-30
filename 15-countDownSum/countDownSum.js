class MySolution {
  countDownSum(num) {
    // Insert code here;
    if(num==1){
      return 1;
    }
    return this.countDownSum(num-1)+num;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;