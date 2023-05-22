let arr = [2, 12, 76, 2, 1, 98, 7];

let check = 0;
let check1 = 0;
let check2 = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i]  === 0) {
    check++;
  }
  if (arr[i] % 2 == 0) {
    check1++;
  }
  if (arr[i] % 2 != 0) {
    check2++;
  } 
}
 console.log(check, check1, check2)