import _ from "lodash";

function conponent() {
  const ele = document.createElement("div");
  ele.innerHTML = _.join(["Hello", "Webpack1"], " ");
  return ele;
}
document.body.appendChild(conponent());
