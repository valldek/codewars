function dataReverse (data) {
  const bytes = [];
  const bytesCount = data.length / 8;

  let i = 0;
  while (i < bytesCount) {
    bytes.push(data.splice(0, 8))
    i++;
  }

  return [].concat(...bytes.reverse());
}
