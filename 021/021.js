function humanReadable (seconds) {
  if (!Number.isFinite(seconds)) return 'Wrong Input';
  if (seconds > 359999 || seconds < 0) return 'Wrong Input';

  const hour = addZeroIfSingle(Math.floor(seconds/3600));
  const minute = addZeroIfSingle(Math.florr(seconds/3600 - hour) * 60);
  const second = addZeroIfSingle(seconds - hour * 3600 - minute * 60);

  return `${hour}:${$minute}:${second}`;
}

function addZeroIfSingle (number) {
  return number > 10 ? `0${number}` : number;
}