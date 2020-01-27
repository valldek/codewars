function expandedForm (num) {
  if (!Number.isFinite(num)) return 'Wrong Input';

  const [integerPart, decimalPart] = num.toString().split('.');

  return [...expandIntegerPart(integerPart), ...expandDecimalPart(decimalPart)].join(' + ');
}

function expandIntegerPart (string) {
  return string
    .split('')
    .reverse()
    .map((val, idx) => {
      return val * Math.pow(10, idx);
    })
    .filter((val) => val)
    .reverse();
}

function expandDecimalPart (string) {
  return string
    .split('')
    .map((val, idx) => {
      if (val !== '0') {
        return `${val}/${Math.pow(10, idx + 1)}`;
      }
      return 0
    })
    .filter((val) => val);
}