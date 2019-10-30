positionElByRowHeightFn("fig3_svg", "fig3_f0", 2, globals);
positionElByRowHeightFn("fig3_svg", "fig3_f1", 3, globals);
positionElByRowHeightFn("fig3_svg", "fig3_f2", 4, globals);
positionElByRowHeightFn("fig3_svg", "fig3_params_l1", 2, globals, true);
positionElByRowHeightFn("fig3_svg", "fig3_params_l2", 3, globals, true);

var svgEl = document.getElementById("fig3_svg");

renderRowFn(svgEl, 2, 8, 3, globals);
renderFlowFn(svgEl, 2, 6, 2, 2, 5, globals);
renderRowFn(svgEl, 3, 3, 5, globals);
renderArrowFn(svgEl, 2, 7.5, globals);
renderArrowFn(svgEl, 2, 2.5, globals);
renderFlowFn(svgEl, 3, 2, 1, 5, 5, globals);
renderRowFn(svgEl, 4, 2, 5, globals);
