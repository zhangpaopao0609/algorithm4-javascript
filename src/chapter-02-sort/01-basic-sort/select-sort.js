function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 选择排序
function SelectionSort(arr) {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    let min = i;
    for (let j = i + 1; j < l; j++) {
      // 查找剩余元素中最小的那一个所在的位置
      if (arr[j] < arr[min]) min = j;
    }
    // 将剩余元素中最小元素和当前位置元素进行交换
    swap(arr, i, min);
  }
}

const arr = [12, 1, 7, 4, 5, 2, 10, 6, 3, 11, 9, 8, 13];

SelectionSort(arr);

console.log(arr);
