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

// Description: This function is multiplying the input parameter by 3, then adding 10 with the result, after that the total amount is dividing by 2, then the result is subtracting by 5 and at last, we are getting the total result as output.

function evenOdd(string) {
  if (typeof string !== "string") {
    return "Please, Provide a valid string";
  }
  const stringLength = string.length;
  if (stringLength % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Description: This function is taking a string as a parameter. If the strings length is a even number, it's returning "even". Else it's returning "odd".

function isLGSeven(number) {
  const sub = number - 7;
  if (sub < 7) {
    return sub;
  }
  if (sub >= 7) {
    return number * 2;
  }
}

// Description:
