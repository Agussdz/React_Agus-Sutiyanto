const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return "tidak terdefinisi";
    }
    return a / b;
  },
};

console.log(calculator.add(7, 7)); // Output = 14
console.log(calculator.subtract(7, 3)); // Output = 4
console.log(calculator.multiply(7, 3)); // Output = 21
console.log(calculator.divide(7, 0)); // Output = Tidak Terdefinisi
console.log(calculator.divide(75, 3)); // Output = 25
