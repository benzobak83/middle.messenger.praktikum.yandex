function debounce(
  f: (...args: unknown[]) => unknown,
  ms: number,
  ...args: unknown[]
): () => unknown {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, args);

    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

export { debounce };
