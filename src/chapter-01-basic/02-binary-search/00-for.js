const arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];

function findIndex(num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

const i48 = findIndex(48);
console.log(i48); // 8

const i98 = findIndex(98);
console.log(i98); // 14
