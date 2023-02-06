function mindGame(number) {
  if (typeof number !== "number") {
    return "Input should be a number";
  }
  const multiplicationResult = number * 3;
  const additionResult = multiplicationResult + 10;
  const divisionResult = additionResult / 2;
  const subtractionResult = divisionResult - 5;
  const totalResult = subtractionResult;
  return totalResult;
}

// Description:
