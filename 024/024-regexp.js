function dataReverse (data) {
  if (!data.length) return [];

  return data.join('').match(/\d{8}/g).reverse().join('').split('').map((val) => +val);
}
