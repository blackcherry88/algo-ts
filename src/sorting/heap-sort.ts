function heapify<T>(
  arr: T[],
  n: number,
  i: number,
  cmp: (a: T, b: T) => number,
): void {
  while (true) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && cmp(arr[left], arr[largest]) > 0) {
      largest = left;
    }

    if (right < n && cmp(arr[right], arr[largest]) > 0) {
      largest = right;
    }

    if (largest === i) break;

    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    i = largest;
  }
}

/** Heap sort - O(n log n) time, O(1) space */
export function heapSort<T>(arr: T[], compare?: (a: T, b: T) => number): T[] {
  const n = arr.length;
  if (n <= 1) return arr;

  const cmp = compare || ((x: T, y: T): number => (x < y ? -1 : x > y ? 1 : 0));

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, cmp);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0, cmp);
  }

  return arr;
}
