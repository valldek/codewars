function squareDigits (num) {
  if (!Number.isFinite()) return 'Wrong Input';

  const digitsString = num.toString().split('');
  const digitsNumber = digitsString.map((val) => parseInt(val, 10));
  const digitsSquared = digitsNumber.map((val) => val*val);

  return parseInt(digitsSquared.join(''), 10);
}