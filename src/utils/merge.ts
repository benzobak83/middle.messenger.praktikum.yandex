import { Indexed } from "./types";

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    // eslint-disable-next-line
    if (!rhs.hasOwnProperty(p)) {
      continue;
    }

    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export { merge };
