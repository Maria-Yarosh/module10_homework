let arr = [2, 12, 76, 5, 1, 98, 7];

console.log(arr.length)

let result = arr.map(function(item, index, array) {

  return item + 1
});
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}