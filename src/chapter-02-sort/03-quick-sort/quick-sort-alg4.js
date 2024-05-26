// 算法 4 书本上的写法，leetcode https://leetcode.cn/problems/sort-an-array/description/ 测试是能 ac 的

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

function partition(arr, left, right) {
  const guard = arr[left];
  let l = left + 1;
  let r = right;

  while (true) {
    while (arr[++l] < guard) {
      if (l === right) {
        break;
      }
    }
    while (guard < arr[--r]) {
      if (r === left) {
        break;
      }
    }
    if (l >= r) break;
    exch(arr, l, r);
  }

  exch(arr, left, r);
  return r;
}

function sort(arr, left, right) {
  if (left >= right) return;
  const p = partition(arr, left, right);

  sort(arr, left, p - 1);
  sort(arr, p + 1, right);
}

function sortArray(arr) {
  shuffle(arr);
  sort(arr, 0, arr.length - 1);
}
