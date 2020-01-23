function solution (input, markers) {
  const inputArr = input.split('\n');
  const output = inputArr.map((val) => {
    const commentInText = markers.filter((mark) => {
      return val.indexOf(mark) !== -1;
    });
    if (commentInText.length) {
      return val.slice(0, val.indexOf(commentInText)).trim();
    }
    return val.trim();
  })

  return output.join('\n');
}
