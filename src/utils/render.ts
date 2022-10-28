import { Block } from "../core/block/block";

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  if (!root) {
    return;
  }
  root.append(block.getContent());
  return root;
}

export { render };
