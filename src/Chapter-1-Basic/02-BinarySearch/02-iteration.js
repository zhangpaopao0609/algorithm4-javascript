function BinarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    const now = arr[mid];
    if (now > key) {
      right = mid - 1;
    } else if (now < key) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function main(arr, key) {
  return BinarySearch(arr, key);
}

const arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];

const res = main(arr, 48);
console.log(res);
