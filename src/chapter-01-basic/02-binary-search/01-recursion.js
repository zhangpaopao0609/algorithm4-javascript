function BinarySearch(arr, left, right, key) {
  console.log(left, right);
  if (left > right) return -1;
  const mid = left + ((right - left) >> 1);
  const now = arr[mid];
  if (now > key) {
    return BinarySearch(arr, left, mid - 1, key);
  } else if (now < key) {
    return BinarySearch(arr, mid + 1, right, key);
  } else {
    return mid;
  }
}

function main(arr, key) {
  return BinarySearch(arr, 0, arr.length - 1, key);
}

const arr = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];

const res = main(arr, 77);
console.log(res);
