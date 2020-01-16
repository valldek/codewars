const CHANGE = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.10,
  quarter: 0.25,
  dollar: 1.00
}

function changeCount (change) {
  const changeStringArray = change.split(' ');
  const changeValueArray = changeStringArray.map((val) => CHANGE[val]);
  const changeSum = changeValueArray.reduce((acc, cur) => {
    return acc += cur;
  }, 0);

  return `$${changeSum.toFixed(2)}`;
}
