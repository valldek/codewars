function anagrams (word, words) {
  const ans = [];
  words.forEach((val) => {
    if (sortString(val) === sortString(word)) {
      ans.push(val);
    }
  });
  return ans;
}

function sortString (str) {
  return str.split('').sort().join('');
}
