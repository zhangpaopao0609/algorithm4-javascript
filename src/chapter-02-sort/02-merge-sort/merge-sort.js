function merge(arr, l, mid, r) {
  const keep = [];
  for (let i = l; i <= r; i++) {
    keep[i] = arr[i];
  }

  for (let p = l, q = mid + 1, k = l; p <= mid || q <= r; ) {
    if (p === mid + 1) arr[k++] = keep[q++];
    else if (q === r + 1) arr[k++] = keep[p++];
    else if (keep[p] > keep[q]) arr[k++] = keep[q++];
    else arr[k++] = keep[p++];
  }
}

function mSort(arr, l, r) {
  if (l >= r) return;
  // 分半
  const mid = l + ((r - l) >> 1);
  // 归并排序左侧
  mSort(arr, l, mid);
  // 归并排序右侧
  mSort(arr, mid + 1, r);
  // 走到这里， l~mid 部分已排序，mid+1~r 部分已排序
  // 直接原地归并操作就可以实现数组排序
  merge(arr, l, mid, r);
}

function MergeSort(arr) {
  mSort(arr, 0, arr.length - 1);
}

const arr = [12, 1, 7, 4, 5, 2, 10, 6, 3, 11, 9, 8, 13];
MergeSort(arr);
console.log(arr);
