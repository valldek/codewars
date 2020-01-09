function getCount(str) {
  if (typeof str !== 'string') return 'Wrong Input - should be a string';

  const vowels = str.toLowerCase().match(/[aeiou]/g);
  return vowels ? vowels.length : 0;
}