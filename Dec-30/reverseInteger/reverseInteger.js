/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(number) {
  let reversed = 0;
  while(number!==0){
      reversed = (reversed*10)+number%10;
      if(number>0){
      number = Math.floor(number/10);
      }else{
      number = Math.ceil(number/10);
      }
  }
  if(reversed>2147483647 || reversed<-2147483647){
      return 0;
  }
  return reversed;
};

export default reverse;