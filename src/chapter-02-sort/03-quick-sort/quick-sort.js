function exch(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const next = i + Math.floor(Math.random() * (len - i));
    exch(arr, i, next);
  }
}

function partition(arr, l, r) {
  // 切分元素
  const k = arr[l];
  let i = l + 1;
  let j = r;

  // 开始走三步骤
  while (1) {
    // 1. 检查左边元素，一直往后挪动，直到元素大于切分元素
    while (i <= j && arr[i] <= k) {
      i++;
    }

    // 2. 检查右边元素，一直往前挪动，直到元素小于切分元素
    while (j >= i && arr[j] >= k) {
      j--;
    }

    // 这里要记得检查一下是否越界了
    if (i >= j) {
      break;
    }

    // 3. 交换 i 和 j
    exch(arr, i, j);
  }

  exch(arr, l, i - 1);
  return i - 1;
}

function sort(arr, l, r) {
  // 递归终止条件
  if (l >= r) {
    return;
  }
  // 进行切分
  const p = partition(arr, l, r);
  // 切分完成后，l ~ p - 1 就是不大于 p 位置元素的了，p + 1 ~ r 就是不小于 p 位置元素的了
  // 然后，对 l ~ p - 1  排序，p + 1 ~ r 也排序，然后整体就有序了
  sort(arr, l, p - 1);
  sort(arr, p + 1, r);
}

function quickSort(arr) {
  shuffle(arr);
  sort(arr, 0, arr.length - 1);
}

// const arr = [7, 1, 12, 4, 5, 2, 10, 6, 3, 11, 9, 8, 13];
const arr = [
  -74, 48, -20, 2, 10, -84, -5, -9, 11, -24, -91, 2, -71, 64, 63, 80, 28, -30,
  -58, -11, -44, -87, -22, 54, -74, -10, -55, -28, -46, 29, 10, 50, -72, 34, 26,
  25, 8, 51, 13, 30, 35, -8, 50, 65, -6, 16, -2, 21, -78, 35, -13, 14, 23, -3,
  26, -90, 86, 25, -56, 91, -13, 92, -25, 37, 57, -20, -69, 98, 95, 45, 47, 29,
  86, -28, 73, -44, -46, 65, -84, -96, -24, -12, 72, -68, 93, 57, 92, 52, -45,
  -2, 85, -63, 56, 55, 12, -85, 77, -39,
];
quickSort(arr);
console.log(arr);
