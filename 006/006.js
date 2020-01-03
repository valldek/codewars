function sqInRect (lng, wdth) {
  if (lng === wdth) return null;

  let sqArr = [];
  sq(lng, wdth);

  function sq (a, b) {
    if (a > b) {
      a = a - b;
      sqArr.push(b);
    } else {
      b = b - a;
      sqArr.push(a);
    }

    if (a !== b) {
      sq(a, b);
    } else {
      sqArr.push(a);
    }
  }

  return sqArr;
}
