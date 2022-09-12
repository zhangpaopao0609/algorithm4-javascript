// https://leetcode.cn/problems/merge-intervals/

function mergeSort(arr, left, right) {
  if (left >= right) return;
  const mid = left + ((right - left) >> 1);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr, left, mid, right) {
  // 合并左边数组和右边数组
  let s = (l = left);
  let r = mid + 1;
  const arrCopy = arr.slice(0);

  while (l <= mid && r <= right) {
    if (arrCopy[l][0] > arrCopy[r][0]) arr[s++] = arrCopy[r++];
    else arr[s++] = arrCopy[l++];
  }

  while (l <= mid) {
    arr[s++] = arrCopy[l++];
  }

  while (r <= right) {
    arr[s++] = arrCopy[r++];
  }
}

function MergeSort(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

// const arr = [12, 3, 4, 1, 7, 19, 10, 4, 2];
// MergeSort(arr);
// console.log(arr);

const intervals = [
  [1, 4],
  [2, 3],
];

MergeSort(intervals);
console.log(intervals);

function intervalsMerge(intervals) {
  const res = [];
  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (res[res.length - 1][1] >= intervals[i][0]) {
      if (res[res.length - 1][1] >= intervals[i][1]) {
        continue;
      } else {
        const prev = res.pop()[0];
        res.push([prev, intervals[i][1]]);
      }
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}

console.log(intervalsMerge(intervals));
