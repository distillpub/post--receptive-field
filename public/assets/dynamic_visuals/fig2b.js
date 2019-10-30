positionElByRowHeightFn("fig2b_svg", "fig2b_f0", 2, globals);
positionElByRowHeightFn("fig2b_svg", "fig2b_f1", 3, globals);
positionElByRowHeightFn("fig2b_svg", "fig2b_params_l1", 2, globals, true);

var svgEl = document.getElementById("fig2b_svg");

renderRowFn(svgEl, 2, 5, 3, globals);
renderFlowFn(svgEl, 2, 2, 1, 3, 5, globals);
renderFlowFn(svgEl, 2, 2, 1, 6, 6, globals);
renderRowFn(svgEl, 3, 2, 5, globals);
renderAnnotationFn(svgEl, 1, 2, 3, 1, 10, "rgb(16, 150, 24)", globals);
renderAnnotationFn(svgEl, 1, 2, 6, 1, 10, "rgb(16, 150, 24)", globals);
