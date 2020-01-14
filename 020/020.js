const rps = (p1, p2) => {
  const reg = /\b(rock|paper|scissors)\b/;
  if (!(reg.test(p1) && reg.test(p2))) return 'It is not Lizard Spock version';

  if (p1 === p2) return 'Draw!';

  // key beats value
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  }

  if (p1 === rules[p2]) return 'Player 2 won!';
  return 'Player 1 won';
}
