export default function group (fn) {
  return [...this].reduce((acc, v) => {
    const key = fn(v);
    if (!acc[key]) acc[key] = [];
    acc[key].push(v);
    return acc;
  }, {});
};
