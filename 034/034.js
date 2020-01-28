function sortArray (array) {
  const odd = array.filter((val) => val % 2).sort((a, b) => a - b);
  let idx = 0;

  return array.map((val) => {
    if (val % 2) {
      val = odd[idx];
      idx++;
    }
    return val;
  });
}
