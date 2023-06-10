function calc(a, b) {
  return a + b;
}

//default
// module.exports=calc
// module.exports={
//   calc,
//   multiply
// }

//named
exports.calc = calc;
// exports.calc = calc;

exports.multiply = (a, b) => a * b;
