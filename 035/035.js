const MORSE_CODE = require('./MORSE_CODE');

const decodeMorse = function (morseCode) {
  const w = morseCode.split('   ');
  return w.
    map((val) =>
      (val.split(' ')
        .map((v) => {
          return MORSE_CODE[v]
        })
      ).join(''))
      .join(' ')
      .trim();
}
