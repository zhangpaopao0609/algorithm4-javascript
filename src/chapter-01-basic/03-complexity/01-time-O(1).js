function numSum(a, b) {
  return a + b; // 每次函数调用仅会执行一次
}

function complexSum(a, b, c, d) {
  const c = Math.pow(a, 10); // 每次函数调用仅会执行一次
  const d = b - 1; // 每次函数调用仅会执行一次
  const e = c * 4; // 每次函数调用仅会执行一次
  const f = Math.abs(d - 100); // 每次函数调用仅会执行一次
  return c * d + e / f; // 每次函数调用仅会执行一次
}
