let arr = [2, 12, 76, 2, 1, 98, 7];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      console.log("одинаковые");
    } else {
      console.log("разные");
    }
  }
}