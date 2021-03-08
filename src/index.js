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
  if (array === undefined) {
    return 0;
  } else
  if (array.length === 0) {
    return 0;
  } else
  let sum = 0;
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  result = sum / array.length;
  return +result;
}