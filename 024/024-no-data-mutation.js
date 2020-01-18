function dataReverse (data) {
  const bytes = [];

  let i = 0;
  while (i <= data.length) {
    bytes.unshift(data.slice(i, i + 8))
    i += 8;
  }

  return [].concat(...bytes);
}