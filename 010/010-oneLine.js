function squareDigits (num) {
  if (!Number.isFinite()) return 'Wrong Input';

  return parseInt(num.toString().split('').map((val) => val*val).join(''), 10);
}