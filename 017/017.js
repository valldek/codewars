function repeatStr (n, s) {
  if (typeof s !== 'string') return 'Wrong Input - s';
  if (!Number.isFinite(n) || n < 0) return 'Wrong input - n';

  return s.repeat(n);
}