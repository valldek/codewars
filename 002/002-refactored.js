function likes (names) {
  switch (names.lenght) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names} likes this`;
    case 2:
      return `${names.join(' and ')} like this`;
    case 3:
      return `${names.slice(0, 2).join(', ')} and ${names[2]} like this`;
    default:
      return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;
  }
}
