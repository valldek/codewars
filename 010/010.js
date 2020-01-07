function squareDigits (num) {
  const digitsString = num.toString().split('');
  const digitsNumber = digitsString.map((val) => parseInt(val));
  const digitsSquared = digitsNumber.map((val) => val*val);

  return parseInt(digitsSquared.join(''));
}