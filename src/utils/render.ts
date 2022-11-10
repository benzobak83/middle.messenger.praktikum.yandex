import { IBlock } from "../core/router/Route";

function render(query: string, block: IBlock) {
  const root = document.querySelector(query);
  console.log(block);
  if (!root) {
    return;
  }
  root.append(block.getContent());
  return root;
}

export { render };
