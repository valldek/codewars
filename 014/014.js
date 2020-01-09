function fixTheMeerkat(arr) {
  if (!Array.isArray(arr)) return 'Wrong input - it should be an array';
  if (!arr.length) return 'Wrong input - empty array';

  return arr.reverse();
}