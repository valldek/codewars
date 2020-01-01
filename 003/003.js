function isValidWalk (walk) {

  if (walk.length !== 10) {
    return false;
  }

  const directions = walk.reduce( (acc, cur) => {
    acc[cur] ? acc[cur] +=1 : acc[cur] = 1;
    return acc;
  }, {});

  if (directions.n === directions.s && directions.e === directions.w) {
    return true;
  }

  return false;
}
