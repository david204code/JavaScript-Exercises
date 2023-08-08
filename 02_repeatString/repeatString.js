const repeatString = function(word, times) {
  if(times < 0) return "ERROR";
  let string = "";
  for(let i = 0; i < times; i++){
    string += word
  }
  return string;
};

const view = repeatString("Hi", 10);
console.log(view);

// Do not edit below this line
module.exports = repeatString;
