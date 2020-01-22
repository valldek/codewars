function presses (pharse) {
  const multitap = {
    1: '1',
    2: 'ABC2',
    3: 'DEF3',
    4: 'GHI4',
    5: 'JKL5',
    6: 'MNO6',
    7: 'PQRS7',
    8: 'TUV8',
    9: 'WXYZ9',
    0: ' 0'
  };

  let sum = 0;
  pharse.toUpperCase().split('').forEach((val) => {
    Object.values(multitap).filter((tap) => {
      if (tap.indexOf(val) > -1) {
        sum += tap.indexOf(val) + 1;
      }
    });
  })
  return sum;
}

console.log(presses('LOL'));
console.log(presses('HOW R U'));