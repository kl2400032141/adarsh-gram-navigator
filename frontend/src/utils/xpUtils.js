// src/utils/xpUtils.js
export function pct(x, total) {
  if (!total) return 0;
  return Math.round((x/total) * 100);
}
