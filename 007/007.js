function findNb (m) {
  let n = 0;
  let mn3 = 0;

  while (m !== mn3) {
    ++n;
    mn3 += Math.pow(n, 3);

    if (m < mn3) {
      return -1;
    }
  }
  return n;
}
