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
const result = gemsToDiamond("ss", 200, 50);
console.log(result);
