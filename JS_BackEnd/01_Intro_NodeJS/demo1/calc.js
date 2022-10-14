function calc(a, b) {
  return a + b;
}

//default
// module.exports=calc


//named
exports.calc = calc;

exports.multiply = (a, b) => a * b;
