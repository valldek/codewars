function divisors (integer) {
  if (!Number.isFinite(integer)) return 'Wrong Input - not an integer';
  if (integer < 0) return 'Wrong Input - less then 0';

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
