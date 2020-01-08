function deleteNth (arr, n) {
  const occurences = {};

  return arr.filter( (val) => {
    occurences[val] ? occurences[val]++ : occurences[val] = 1;
    return occurences[val] <= n;
  });
}
