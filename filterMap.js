export default function* filter (fn) {
  for (const v of this) {
    const val = fn(v);
    if (val) yield val;
  }
};
