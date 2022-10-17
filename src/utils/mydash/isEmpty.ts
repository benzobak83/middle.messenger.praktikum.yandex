function isEmpty(value) {
  function isObject() {
    return typeof value === "object" && !isFalse();
  }
  function isFalse() {
    return !value && !isLength();
  }
  function isString() {
    return typeof value === "string" && isLength();
  }
  function isLength() {
    if (!value) {
      return false;
    }
    if (value.length) {
      return true;
    }
    return false;
  }
  if (isObject() || isString()) {
    return false;
  }
  return true;
}
