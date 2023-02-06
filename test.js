function isLGSeven(number) {
  const sub = number - 7;
  if (sub < 7) {
    return sub;
  }
  if (sub >= 7) {
    return number * 2;
  }
}
console.log(isLGSeven(15));
