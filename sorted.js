const subtract = (x, y) => x - y;

export default function sorted (fn = subtract) {
  return [...this].sort(fn);
};
