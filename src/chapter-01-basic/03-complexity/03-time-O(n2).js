function NMMultiply(n, m) {
  let mli = 1; // 每次函数调用仅会执行一次
  for (let i = 1; i < n; i++) {
    // 每次函数调时执行 n 次
    for (let j = 1; j < m; j++) {
      // 每次函数调时执行 n * m 次
      mli += i * j; // 每次函数调时执行 n * m 次
    }
  }
  return mli;
}

// 冒泡排序就是典型的 O(n^2) 的算法
function bubbleSort(arr) {
  const n = arr.length; // 每次函数调用时仅会执行一次
  for (let i = 0; i < n - 1; i++) {
    // 每次函数调用会执行 n 次，0,1,2,3...n-1
    for (let j = i + 1; j < n; j++) {
      // 每次函数调用会执行 n(n+1)/2 次，即 (n^2 + n) / 2 次，n + (n-1) + (n-2) + ... + 1
      if (arr[i] > arr[j]) {
        // 无法估计，但最多 n(n-1)/2 次，最少 0 次
        const temp = arr[i]; // 无法估计，但最多 n(n-1)/2 次，最少 0 次
        arr[i] = arr[j]; // 无法估计，但最多 n(n-1)/2 次，最少 0 次
        arr[j] = temp; // 无法估计，但最多 n(n-1)/2 次，最少 0 次
      }
    }
  }
}

const arr = [12, 2, 6, 4, 11, 1];
bubbleSort(arr);
console.log(arr);
