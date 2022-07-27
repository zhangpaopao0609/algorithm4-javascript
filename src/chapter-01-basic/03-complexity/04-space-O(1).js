function numSum(a, b) {
  // 需要 2 个临时的变量空间
  return a + b; // 需要 1 个临时的变量空间
}

function complexSum(a, b, c, d) {
  // 需要 4 个临时的变量空间
  const c = Math.pow(a, 10); // 需要 1 个临时的变量空间
  const d = b - 1; // 需要 1 个临时的变量空间
  const e = c * 4; // 需要 1 个临时的变量空间
  const f = Math.abs(d - 100); // 需要 1 个临时的变量空间
  return c * d + e / f; // 需要 1 个临时的变量空间
}
