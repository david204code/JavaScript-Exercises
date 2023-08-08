const leapYears = function(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const view = leapYears(2004);
console.log(view);

// Do not edit below this line
module.exports = leapYears;
