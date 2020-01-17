function mean (lst) {
  let numArr = [];
  let str = '';

  for (let l of lst) {
    if (Number.isInteger(+l)) {
      numArr.push(+l);
    } else {
      str += l;
    }
  }

  const mean = numArr.reduce((acc, cur) => {
    return acc += cur;
  }, 0)/numArr.length;

  return [mean, str];
}
