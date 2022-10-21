function getRandomIntInclusive(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  if ( a < b) {
    [a, b] = [b, a];
  }
  a = Math.ceil(a);
  b = Math.floor(b);
  return Math.floor(Math.random() * (b - a + 1)) + a; //Максимум и минимум включаются
}

function getStringLength (string, b) {
  return string.length <= b;
}

getRandomIntInclusive(1, 5);
getStringLength ('ab', 8);

