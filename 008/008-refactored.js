function toWeirdCase (string) {
  let weirdString = string.split('').map((v) => {
    v.split('').map((val, idx) => {
      return !(idx%2) ? val.toUpperCase() : val.toLowerCase();
    }).join('')
  });

  return weirdString.join(' ');
}
