const CHANGE = {
  penny: 0.01,
  nickel: 0.05,
  dime: 0.10,
  quarter: 0.25,
  dollar: 1.00
}

function changeCount (change) {
  return `$${change.split(' ').map((val) => CHANGE[val]).reduce((acc, cur) => acc += cur, 0).toFixed(2)}`;
}
