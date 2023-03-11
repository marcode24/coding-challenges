const solution = (list) => {
  let result = '';
  let start = list[0];
  let end = list[0];
  let i = 1;

  while (i < list.length) {
    if (list[i] - list[i - 1] === 1) {
      end = list[i];
    } else {
      if (start === end) {
        result += `${start},`;
      } else if (end - start === 1) {
        result += `${start},${end},`;
      } else {
        result += `${start}-${end},`;
      }
      start = list[i];
      end = list[i];
    }
    i += 1;
  }
  if (start === end) {
    result += `${start}`;
  } else if (end - start === 1) {
    result += `${start},${end}`;
  } else {
    result += `${start}-${end}`;
  }

  return result;
};

module.exports = solution;
