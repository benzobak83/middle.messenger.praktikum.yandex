function first(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }

  return list.length ? list[0] : undefined;
}
