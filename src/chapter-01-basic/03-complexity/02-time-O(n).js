function sum1ToN(n) {
  let sum = 0; // 每次函数调用时仅会执行一次
  for (let i = 1; i <= n; i++) {
    // 每次函数调用时执行 n + 1 次，1,2,3...n-1,n,n+1
    sum += i; // 每次函数调用时执行 n 次
  }
  return sum; // 每次函数调用时仅会执行一次
}
