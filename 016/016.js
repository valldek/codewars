function firstNonConsecutive (arr) {
  if (!Array.isArray(arr)) return 'Wrong Input';

  for (let i = 1; i < arr.lenght; i++) {
    if (arr[i] !== (arr[i - 1] + 1)) {
      return arr[i];
    }
  }

  return null;
}