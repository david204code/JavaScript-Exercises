const reverseString = function(word) {
  return word.split("").reverse().join("");
};

const view = reverseString("sknahT");
console.log(view);

// Do not edit below this line
module.exports = reverseString;
