positionElByRowHeightFn("fig5_svg", "fig5_params_l1a", 1, globals, true);
positionElByRowHeightFn("fig5_svg", "fig5_params_l1b", 1, globals, true);
positionElByRowHeightFn("fig5_svg", "fig5_params_l2", 2, globals, true);
positionElByRowHeightFn("fig5_svg", "fig5_params_l3", 3, globals, true);

var svgEl = document.getElementById("fig5_svg");

renderRowFn(svgEl, 1, 8, 3, globals);

renderFlowFn(svgEl, 1, 1, 1, 3, 3, globals);
renderFlowFn(svgEl, 1, 1, 1, 7, 4, globals);

renderFlowFn(svgEl, 1, 3, 1, 2, 8, globals);
renderFlowFn(svgEl, 1, 3, 1, 4, 9, globals);
renderFlowFn(svgEl, 1, 3, 1, 6, 10, globals);
renderFlowFn(svgEl, 1, 3, 1, 8, 11, globals);

renderRowFn(svgEl, 2, 2, 3, globals);
renderRowFn(svgEl, 2, 4, 8, globals);

renderFlowFn(svgEl, 2, 1, 1, 8, 9, globals);
renderFlowFn(svgEl, 2, 1, 1, 10, 10, globals);

renderRowFn(svgEl, 3, 2, 9, globals);

renderFlowFn(svgEl, 3, 1, 1, 9, 7, globals);
renderFlowFn(svgEl, 3, 1, 1, 10, 8, globals);
renderFlowFn(svgEl, 2, 1, 1, 3, 7, globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 4, 8, globals, 2);

renderRowFn(svgEl, 4, 2, 7, globals);

var featureNodes = svgEl.querySelectorAll(".feature");
for (var i=0; i < featureNodes.length; i++) {
  featureNodes[i].addEventListener("mouseenter", renderSingleFlowStack);
}

renderSingleFlowStack.call(svgEl.querySelector("#fig5_svg > rect.feature.feature_4_8"));
