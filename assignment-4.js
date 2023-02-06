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

// Description-1: This function is multiplying the input parameter by 3, then adding 10 with the result, after that the total amount is dividing by 2, then the result is subtracting by 5 and at last, we are getting the total result as output.

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

// Description-2: This function is taking a string as a parameter. If the strings length is a even number, it's returning "even". Else it's returning "odd".

function isLGSeven(number) {
  if (typeof number !== "number") {
    return "Input should be a number";
  }
  const sub = number - 7;
  if (sub < 7) {
    return sub;
  }
  if (sub >= 7) {
    return number * 2;
  }
}

// Description-3: In this function, we are subtracting the input number by 7, if the result is less than 7 it's returning that number. Or the result is greater than or equal to 7 then it's returning the input numbers double.

function gemsToDiamond(firstFriendsGem, secondFriendsGem, thirdFriendsGem) {
  if (
    typeof firstFriendsGem !== "number" ||
    typeof secondFriendsGem !== "number" ||
    typeof thirdFriendsGem !== "number"
  ) {
    return "Input should be a number";
  }
  const firstFriendsDiamond = firstFriendsGem * 21;
  const secondFriendsDiamond = secondFriendsGem * 32;
  const thirdFriendsDiamond = thirdFriendsGem * 43;
  const totalDiamonds =
    firstFriendsDiamond + secondFriendsDiamond + thirdFriendsDiamond;
  if (totalDiamonds >= 2000) {
    return totalDiamonds - 2000;
  } else {
    return totalDiamonds;
  }
}

// Description-5: In this function, it's taking three parameters. First parameter is multiplying by 21, second is by 32 and third is by 43. Then it's adding value of the numbers . If the total value is equal or more than 2000, it's subtracting the total by 2000. Else the total is less than the double of 1000, it's returning the exact value.
