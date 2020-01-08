function deleteNth (arr, n) {
  if (!Array.isArray(arr)) return 'Wrong Input - arr is not an array';
  if (!arr.length) return [];
  if (!Number.isFinite(n)) return 'Wrong Input - n is not a Finite number';
  if (n < 0) return 'Wrong Input - n is not positive integer';

  const occurences = {};

  return arr.filter( (val) => {
    occurences[val] ? occurences[val]++ : occurences[val] = 1;
    return occurences[val] <= n;
  });
}
