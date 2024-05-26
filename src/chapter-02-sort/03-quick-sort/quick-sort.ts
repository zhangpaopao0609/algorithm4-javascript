/**
 * 快排
 * @param arr
 */

function exch(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr: number[]) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const next = i + Math.floor(Math.random() * (len - i));
    exch(arr, i, next);
  }
}

function partition(arr: number[], left: number, right: number): number {
  const k = arr[left];
  let l = left + 1;
  let r = right;

  while (1) {
    // 左边小的直接跳过
    while (l <= r && arr[l] <= k) l++;
    // 右边大的直接跳过
    while (r >= l && arr[r] >= k) r--;
    if (l >= r) break;
    exch(arr, l, r);
  }

  exch(arr, left, l - 1);
  return l - 1;
}

function sort(arr: number[], left: number, right: number) {
  if (left >= right) return;
  const p = partition(arr, left, right);

  sort(arr, left, p - 1);
  sort(arr, p + 1, right);
}

function sortArray(arr: number[]): number[] {
  shuffle(arr);
  sort(arr, 0, arr.length - 1);
  return arr;
}
