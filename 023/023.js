function mean (lst) {
  let mean = 0;
  let str = '';

  for (let l of lst) {
    if (Number.isInteger(+l)) {
      mean += l;
    } else {
      str += l;
    }
  }
  return [mean/10, str];
}
