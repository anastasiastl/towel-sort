module.exports = function towelSort (matrix) {
  var result = [];
  if (matrix === undefined) {
    return result;
  }
  function newArr(arr) {
    for (var i=0; i<arr.length; i++) {
      result.push(arr[i]);
    }
    
  }
  for (var i=0; i<matrix.length; i++) {
    if (i % 2 === 0) {
      newArr(matrix[i])
    } else if (i % 2 !== 0) {
      newArr(matrix[i].reverse())
    }
  }
  return result;
}
