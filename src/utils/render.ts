import { IBlock } from "../core/router/Route";

function render(query: string, block: IBlock) {
  const root = document.querySelector(query);
  console.log(block);
  console.log("render");
  if (!root) {
    return;
  }
  root.innerHTML = "";
  root.append(block.getContent());
  return root;
}

export { render };
