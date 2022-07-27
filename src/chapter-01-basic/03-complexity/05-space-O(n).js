function numToArr(n) {
  // 需要 1 个临时的变量空间
  const arr = []; // 需要 1 个临时的变量空间
  for (let i = 0; i < n; i++) {
    // 每执行一次，就会增加一个元素，相应的就需要多占用一个临时空间
    // 总共会执行 n 次，因此会需要 n 个临时空间
    arr[i] = i;
  }
  return arr; // 需要 1 个临时的变量空间
}

const numArr = numToArr(100);
console.log(numArr);
