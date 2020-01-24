function kebabize (str) {
  const newString = str.replace(/\d/g, '').replace(/[A-Z]/g, '-$&').toLowerCase();
  return newStr[0] === '-' ? newString.slice(1) : newString;
}