function toWeirdCase (string) {
  let weirdString =
    string.split('')
    .map((val) => {
      let tmp = '';
        for (let i = 0; i < string.length; i++) {
          !(i%2) ? tmp += str[i].toUpperCase() : str[i].toLowerCase();
        }
      return tmp;
    });

  return weirdString.join(' ');
}
