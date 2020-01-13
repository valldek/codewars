function high (x) {

  const wordsArray = x.split(' ');
  const wordsScore = wordsArray.map((val) => {
    return val.split('').reduce((acc, cur) => {
      return acc += cur.charCodeAt() - 96;
    }, 0)
  });

  return wordsArray[wordsScore.indexOf(Math.max(...wordsScore))];
}
