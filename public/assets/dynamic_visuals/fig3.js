var svgEl = document.getElementById("fig3_svg");
var globals = {
  "box_width": 30,
  "box_height": 30,
  "box_inner_padding": 5,
  "row_space": 100,
  "perspective_shift": 18,
  "perspective_spacing": 4,
  "stroke_width": 1
};

renderRowFn(svgEl, 2, 8, 3, globals);
renderFlowFn(svgEl, 2, 6, 2, 2, 5, globals);
renderRowFn(svgEl, 3, 3, 5, globals);
renderArrowFn(svgEl, 2, 7.5, globals);
renderArrowFn(svgEl, 2, 2.5, globals);
renderFlowFn(svgEl, 3, 2, 1, 5, 5, globals);
renderRowFn(svgEl, 4, 2, 5, globals);
