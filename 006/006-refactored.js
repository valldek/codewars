function sqInRect (lng, wdth) {
  if (lng === wdth) return null;

  const sqArr = [];

  sq(lng, wdth, sqArr);

  return sqArr;
}

function sq (a, b, arr) {
  if (a !== 0 || b !== 0) {
    if (a > b) {
      arr.push(b);
      sq(a - b, b, arr);
    } else if (a < b) {
      arr.push(a);
      sq(a, b - a, arr);
    } else {
      arr.push(a);
    }
  }
}
