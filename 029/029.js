function mean(town, string) {
  const data = getDataFromString(town, string);
  if (data === -1) return -1;

  return data.reduce((acc, cur) => {
    acc += cur
  }, 0) / data.length;
}

function variance(town, string) {
  const data = getDataFromString(town, string);
  if (data === -1) return -1;

  const m = mean(town, string);
  return data.reduce((acc, cur) => {
    return acc += Math.pow((cur -m), 2)
  }, 0) / data.length;
}

function getDataFromString(town, string) {
  const dataForTown = string.split('\n').filter((val) => {
    return val.indexOf(town) !== -1
  }).toString();
  const townName = dataForTown.split(':')[0] === town ? true : false;

  if (dataForTown && townName) {
    const data = dataForTown.match(/([0-9]+\.?[0-9]+|[0-9]+)/g).map((val) => parseFloat(val));
    return data
  }

  return -1;
}
