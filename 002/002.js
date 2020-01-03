function likes (names) {
  if (names.length > 3) {
    return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;
  } else if (names.length === 3) {
    return `${names.slice(0, 2).join(', ')} and ${names[2]} like this`;
  } else if (names.length === 1) {
    return `${names} likes this`;
  } else if (names.length === 0) {
    return 'no one likes this';
  } else {
    return `${names.join(' and ')} like this`;
  }
}
