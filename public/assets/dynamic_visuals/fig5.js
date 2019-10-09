var svgEl = document.getElementById("fig5_svg");
var globals = {
  "box_width": 30,
  "box_height": 30,
  "box_inner_padding": 5,
  "row_space": 100,
  "perspective_shift": 18,
  "perspective_spacing": 4,
  "stroke_width": 1
};

renderRowFn(svgEl, 1, 8, 4, globals);

renderFlowFn(svgEl, 1, 1, 1, 4, 4, globals);
renderFlowFn(svgEl, 1, 1, 1, 8, 5, globals);

renderFlowFn(svgEl, 1, 3, 1, 3, 9, globals);
renderFlowFn(svgEl, 1, 3, 1, 5, 10, globals);
renderFlowFn(svgEl, 1, 3, 1, 7, 11, globals);
renderFlowFn(svgEl, 1, 3, 1, 9, 12, globals);

renderRowFn(svgEl, 2, 2, 4, globals);
renderRowFn(svgEl, 2, 4, 9, globals);

renderFlowFn(svgEl, 2, 1, 1, 9, 10, globals);
renderFlowFn(svgEl, 2, 1, 1, 11, 11, globals);

renderRowFn(svgEl, 3, 2, 10, globals);

renderFlowFn(svgEl, 3, 1, 1, 10, 8, globals);
renderFlowFn(svgEl, 3, 1, 1, 11, 9, globals);
renderFlowFn(svgEl, 2, 1, 1, 4, 8, globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 5, 9, globals, 2);

renderRowFn(svgEl, 4, 2, 8, globals);

var featureNodes = svgEl.querySelectorAll(".feature");
for (var i=0; i < featureNodes.length; i++) {
  featureNodes[i].addEventListener("mouseenter", renderSingleFlowStack);
}

renderSingleFlowStack.call(svgEl.querySelector("#fig5_svg > rect.feature.feature_4_9"));
