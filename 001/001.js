function multiply (a, b) {

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Both arguments should be a finite number');
  }

  return a * b;
}