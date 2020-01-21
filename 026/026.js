function validatePIN (pin) {
  const pinRegExp = /^(\d{4}|\d{6})$/;
  return pinRegExp.test(pin);
}
