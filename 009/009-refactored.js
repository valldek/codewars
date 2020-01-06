function anagrams (word, words) {
  return words.filter((val) =>
    sortString(val) === sortString(word)
  );
}

function sortString (str) {
  return str.split('').sort().join('');
}
