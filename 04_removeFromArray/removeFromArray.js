const removeFromArray = function(array, ...args) {
  const newArray = [];
  
  array.forEach((item) => {
    if(!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray
};

const view = removeFromArray([1, 2, 3, 4], 2, 4)
console.log(view);

// Do not edit below this line
module.exports = removeFromArray;
