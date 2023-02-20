const reverse = (str) => {
  str = str.trim().split(' ');
  for (let i = 1; i < str.length; i += 2) {
    str[i] = str[i].split('').reverse().join('');
  }
  return str.join(' ');
};

module.exports = reverse;
