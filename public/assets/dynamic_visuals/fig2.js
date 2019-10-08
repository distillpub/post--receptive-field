var svgEl = document.getElementById("fig2_svg");
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
renderFlowFn(svgEl, 2, 1, 1, 3, 5, globals);
renderFlowFn(svgEl, 2, 1, 1, 6, 6, globals);
renderFlowFn(svgEl, 2, 1, 1, 9, 7, globals);
renderRowFn(svgEl, 3, 3, 5, globals);
renderAnnotationFn(svgEl, 3, 2, 5, 0, 20, "rgb(220, 18, 18)", globals);
renderAnnotationFn(svgEl, 1, 6, 3, 1, 10, "rgb(16, 150, 24)", globals);
renderAnnotationFn(svgEl, 1, 2, 7, 1, 30, "rgb(153, 0, 153)", globals);
