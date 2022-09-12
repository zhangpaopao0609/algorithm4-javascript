function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 插入排序
function InsertSort(arr) {
  const l = arr.length;
  for (let i = 1; i < l; i++) {
    for (let j = i; j > 0; j--) {
      // 元素与前一个元素进行比较，小于就交换
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
      // 否者就是找到了正确的位置，退出循环
      else break;
    }
  }
}

const arr = [12, 1, 7, 4, 5, 2, 10, 6, 3, 11, 9, 8, 13];

InsertSort(arr);

console.log(arr);
