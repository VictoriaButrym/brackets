module.exports = function check(str, bracketsConfig) {
  // your solution
  let br_c = bracketsConfig;
  let array = str.split('');

  for (let i = 0; i < array.length; i++){
    for(let j = 0; j < br_c.length; j++){
      if (array[i] === br_c[j][0] && array[i+1] === br_c[j][1]){
        array.splice(i, 2);
        if (array.length == 0){
          return true;
        }
        i=-1;
      }
    }
  }
  return false;
}
