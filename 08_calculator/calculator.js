const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr){
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a - 1 <= 0){
    return 1;
  }else {
    let fact = a;
    while (a > 1) {
      fact *= (a - 1);
      a--;
    }
    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
