function iqTest(numbers) {
  const nums = numbers
    .split(' ')
    .map((val) => parseInt(val, 10));

  const even = nums.filter((val) => !(val % 2));
  const odd = nums.filter((val) => val % 2);
  const differ = even.length === 1 ? even[0] : odd[0];

  return nums.indexOf(differ) + 1;
}