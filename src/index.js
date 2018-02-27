module.exports = function solveEquation(equation) {
  var arr =[];
  arr = equation.split(" ");
  var a = arr[0];
  var b = arr[3] + arr[4];
  var c = arr[7] + arr[8];
  a = +a
  b = +b
  c = +c
  var d = b * b - 4 * a * c;
  var x1 = (-b + Math.sqrt(d)) / (2 * a);
  var x2 = (-b - Math.sqrt(d)) / (2 * a);
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  var solution = [];
  solution.push(x1)
  solution.push(x2)
  solution.sort(function(a, b) {
    return a - b;
  });
  return solution
}
