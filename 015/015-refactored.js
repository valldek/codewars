function longestConsec(strarr, k) {
  const n = strarr.length;
  if (!n && k > n && k <= 0 ) return "";

  const idx = longestIndex(strarrLengths, k);
  return strarr.slice(idx, idx + k).join('');
}

function longestIndex (strarr, k) {
  const strarrLengths = strarr.map((val, idx) => strarr.slice(idx, idx + k).join('').length);
  return strarrLengths.indexOf(Math.max(...strarrLengths));
}