/**
 * 浅拷贝
 */
export function extend (a, b) {
  for (const key in b) {
    a[key] = b[key]
  }
  return a
}
