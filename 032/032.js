function expandedForm(num) {
  let num2 = [];

  num.toString().split('').reverse().filter((val, idx) => {
    if (val !== '0') {
      num2.push(val * Math.pow(10, idx));
    }
    return (val !== '0')
  });

  return num2.reverse().join(' + ');
}
