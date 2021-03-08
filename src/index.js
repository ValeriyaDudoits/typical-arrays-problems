exports.min = function min(array) {

  let result = Math.min.apply(Math, array);
  if (result == Infinity) {
    return 0;
  } else return result;

}

exports.max = function max(array) {
  let result = Math.max.apply(Math, array);
  if (result === -Infinity) {
    return 0;
  } else return result;
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
  result = sum / array.length;
  return +result;

}