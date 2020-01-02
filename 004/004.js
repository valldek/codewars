function iqTest (numbers) {
  const nums = numbers.split(' ');
  let odd = [];
  let even = [];

  for (let num of nums) {
    if (num % 2) {
      odd.push(num);
    } else {
      even.push(num);
    }
  }

  if (even.length > odd.length) {
    return nums.indexOf(odd[0] + 1);
  } else {
    return nums.indexOf(even[0] + 1);
  }
}