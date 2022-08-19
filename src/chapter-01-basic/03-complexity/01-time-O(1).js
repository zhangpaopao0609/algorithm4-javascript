function numSum(a, b) {
  return a + b; // 每次函数调用仅会执行一次
}

function complexSum(a, b, c, d) {
  const e = Math.pow(a, 10); // 每次函数调用仅会执行一次
  const f = b - 1; // 每次函数调用仅会执行一次
  const g = c * 4; // 每次函数调用仅会执行一次
  const h = Math.abs(d - 100); // 每次函数调用仅会执行一次
  return e * f + g / h; // 每次函数调用仅会执行一次
}
