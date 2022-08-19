function numSum(a, b) {
  // 需要 2 个临时的变量空间
  return a + b; // 需要 1 个临时的变量空间
}

function complexSum(a, b, c, d) {
  // a, b, c, d 需要 4 个临时的变量空间
  const e = Math.pow(a, 10); // e 需要 1 个临时的变量空间
  const f = b - 1; // f 需要 1 个临时的变量空间
  const g = c * 4; // g 需要 1 个临时的变量空间
  const h = Math.abs(d - 100); // h 需要 1 个临时的变量空间
  return e * f + g / h; // 需要 1 个临时的变量空间
}
