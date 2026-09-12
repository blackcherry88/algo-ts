/** Bubble sort - O(n²) time, O(1) space */
export function bubbleSort<T>(a: T[], compare?: (a: T, b: T) => number): T[] {
  const n = a.length;
  const cmp = compare || ((x: T, y: T): number => (x < y ? -1 : x > y ? 1 : 0));

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (cmp(a[j], a[j + 1]) > 0) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return a;
}
