function divisors (integer) {
  const divs = Math.floor(integer / 2);
  let divisorsArray = [];

  for (let i = 2; i <= divs; i++) {
    if(!(integer % i)) {
      divisorsArray.push(i);
    }
  }

  if (divisorsArray.length === 0) {
    return `${integer} is prime`;
  }
  return divisorsArray;
}
