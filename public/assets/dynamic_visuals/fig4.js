var fig4_globals = globals;
if (mobile) {
  fig4_globals = mobile_globals2;
}

positionElByRowHeightFn("fig4_svg", "fig4_params_l1a", 1, fig4_globals, true);
positionElByRowHeightFn("fig4_svg", "fig4_params_l1b", 1, fig4_globals, true);
positionElByRowHeightFn("fig4_svg", "fig4_params_l2", 2, fig4_globals, true);
positionElByRowHeightFn("fig4_svg", "fig4_params_l3", 3, fig4_globals, true);

var svgEl = document.getElementById("fig4_svg");

renderRowFn(svgEl, 1, 8, 6, fig4_globals);

renderFlowFn(svgEl, 1, 5, 1, 4, 4, fig4_globals);
renderFlowFn(svgEl, 1, 5, 1, 6, 5, fig4_globals);
renderFlowFn(svgEl, 1, 5, 1, 8, 6, fig4_globals);
renderFlowFn(svgEl, 1, 5, 1, 10, 7, fig4_globals);

renderFlowFn(svgEl, 1, 3, 1, 6, 9, fig4_globals);
renderFlowFn(svgEl, 1, 3, 1, 7, 10, fig4_globals);
renderFlowFn(svgEl, 1, 3, 1, 8, 11, fig4_globals);
renderFlowFn(svgEl, 1, 3, 1, 9, 12, fig4_globals);
renderFlowFn(svgEl, 1, 3, 1, 10, 13, fig4_globals);
renderFlowFn(svgEl, 1, 3, 1, 11, 14, fig4_globals);

renderRowFn(svgEl, 2, 4, 4, fig4_globals);
renderRowFn(svgEl, 2, 6, 9, fig4_globals);

renderFlowFn(svgEl, 2, 3, 1, 9, 10, fig4_globals);
renderFlowFn(svgEl, 2, 3, 1, 10, 11, fig4_globals);
renderFlowFn(svgEl, 2, 3, 1, 11, 12, fig4_globals);
renderFlowFn(svgEl, 2, 3, 1, 12, 13, fig4_globals);

renderRowFn(svgEl, 3, 4, 10, fig4_globals);

renderFlowFn(svgEl, 3, 1, 1, 10, 7, fig4_globals);
renderFlowFn(svgEl, 3, 1, 1, 11, 8, fig4_globals);
renderFlowFn(svgEl, 3, 1, 1, 12, 9, fig4_globals);
renderFlowFn(svgEl, 3, 1, 1, 13, 10, fig4_globals);
renderFlowFn(svgEl, 2, 1, 1, 4, 7, fig4_globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 5, 8, fig4_globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 6, 9, fig4_globals, 2);
renderFlowFn(svgEl, 2, 1, 1, 7, 10, fig4_globals, 2);

renderRowFn(svgEl, 4, 4, 7, fig4_globals);

var featureNodes = svgEl.querySelectorAll(".feature");
for (var i=0; i < featureNodes.length; i++) {
  featureNodes[i].addEventListener("mouseenter", renderSingleFlowStack);
}

renderSingleFlowStack.call(svgEl.querySelector("#fig4_svg > rect.feature.feature_4_8"));
