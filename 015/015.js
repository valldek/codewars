function longestConsec(strarr, k) {
  const n = strarr.length;

  if (!n && k > n && k <= 0 ) return "";

  const strarrLengths = strarr.map((val) => val.length);
  const idx = longestIndex(strarrLengths, k);

  return strarr.slice(idx, idx + k).join('');
}

function longestIndex(arr, n) {
  let sum = 0;
  let sumN = 0;
  let idx = 0;

  for (let i = 0; i < arr.length - n; i++) {
    for (let j = 0; j < n; j++) {
      sumN = arr[i + j];
    }
    if (sumN > sum) {
      sum = sumN;
      idx = i;
    }
  }

  return idx;
}