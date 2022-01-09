export const kFormatter = (number: number): string =>
  (Math.abs(number) / 1000).toFixed(1) + 'k'
