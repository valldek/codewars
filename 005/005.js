function findNextSquare (sq) {
  const sqrt = Math.sqrt(sq);

  if (!Number.isInteger(sqrt)) {
    return -1;
  }

  return Math.pow((sqrt + 1), 2);
}
