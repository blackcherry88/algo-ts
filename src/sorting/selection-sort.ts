/** Selection sort - O(n²) time, O(1) space */
export function selectionSort<T>(
  a: T[],
  compare?: (a: T, b: T) => number,
): T[] {
  const n = a.length;
  const cmp = compare || ((x: T, y: T): number => (x < y ? -1 : x > y ? 1 : 0));

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (cmp(a[j], a[minIndex]) < 0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [a[i], a[minIndex]] = [a[minIndex], a[i]];
    }
  }

  return a;
}
