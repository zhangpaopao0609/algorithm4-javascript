function merge(arr, l, mid, r) {
  const keep = [];
  for (let i = l; i <= r; i++) {
    keep[i] = arr[i];
  }

  for (let i = l, j = mid + 1, k = l; i <= mid || j <= r; ) {
    if (i === mid + 1) arr[k++] = keep[j++];
    else if (j === r + 1) arr[k++] = keep[i++];
    else if (keep[i] > keep[j]) arr[k++] = keep[j++];
    else arr[k++] = keep[i++];
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
