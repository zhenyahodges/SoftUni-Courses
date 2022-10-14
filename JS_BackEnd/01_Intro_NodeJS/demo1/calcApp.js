//default import
// const calc = require("./calc.js");


//named import
const { calc,multiply } = require("./calc.js");

function init() {
  let result = calc(2, 3);
  console.log(result);
  console.log(multiply(4,2));
}

init();
