export function isObjectEmpty(obj) {
  const keys = Object.keys(obj);
  if (keys.length === 0) {
    return true;
  }
  for (let key of keys) {
    if (obj[key]) {
      return false;
    }
  }
  return true;
}
