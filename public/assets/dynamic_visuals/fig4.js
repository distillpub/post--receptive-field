var svgEl = document.getElementById("fig4_svg");
var globals = {
  "box_width": 30,
  "box_height": 30,
  "box_inner_padding": 5,
  "row_space": 100,
  "perspective_shift": 18,
  "perspective_spacing": 4,
  "stroke_width": 1
};

renderRowFn(svgEl, 1, 8, 6, globals);

renderFlowFn(svgEl, 1, 5, 1, 4, 4, globals);
renderFlowFn(svgEl, 1, 5, 1, 6, 5, globals);
renderFlowFn(svgEl, 1, 5, 1, 8, 6, globals);
renderFlowFn(svgEl, 1, 5, 1, 10, 7, globals);

renderFlowFn(svgEl, 1, 3, 1, 6, 9, globals);
renderFlowFn(svgEl, 1, 3, 1, 7, 10, globals);
renderFlowFn(svgEl, 1, 3, 1, 8, 11, globals);
renderFlowFn(svgEl, 1, 3, 1, 9, 12, globals);
renderFlowFn(svgEl, 1, 3, 1, 10, 13, globals);
renderFlowFn(svgEl, 1, 3, 1, 11, 14, globals);

renderRowFn(svgEl, 2, 4, 4, globals);
renderRowFn(svgEl, 2, 6, 9, globals);

renderFlowFn(svgEl, 2, 3, 1, 9, 10, globals);
renderFlowFn(svgEl, 2, 3, 1, 10, 11, globals);
renderFlowFn(svgEl, 2, 3, 1, 11, 12, globals);
renderFlowFn(svgEl, 2, 3, 1, 12, 13, globals);

renderRowFn(svgEl, 3, 4, 10, globals);

renderFlowFn(svgEl, 3, 1, 1, 10, 7, globals);
renderFlowFn(svgEl, 3, 1, 1, 11, 8, globals);
renderFlowFn(svgEl, 3, 1, 1, 12, 9, globals);
renderFlowFn(svgEl, 3, 1, 1, 13, 10, globals);
renderFlowFn(svgEl, 2, 1, 1, 4, 7, globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 5, 8, globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 6, 9, globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 7, 10, globals, 2);

renderRowFn(svgEl, 4, 4, 7, globals);

var featureNodes = svgEl.querySelectorAll(".feature");
for (var i=0; i < featureNodes.length; i++) {
  featureNodes[i].addEventListener("mouseenter", renderSingleFlowStack);
}

renderSingleFlowStack.call(svgEl.querySelector("#fig4_svg > rect.feature.feature_4_8"));
