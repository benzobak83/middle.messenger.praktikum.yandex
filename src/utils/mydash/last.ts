function last(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }

  const length = list.length;
  return length ? list[length - 1] : undefined;
}
