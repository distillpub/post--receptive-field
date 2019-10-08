var fig0_setup = function() {
  var svgEl = document.getElementById("fig0_svg");
  var globals = {
    "box_width": 30,
    "box_height": 30,
    "box_inner_padding": 5,
    "row_space": 100,
    "perspective_shift": 18,
    "perspective_spacing": 4,
    "stroke_width": 1
  };

  renderRowFn(svgEl, 2, 6, 4, globals);
  renderFlowFn(svgEl, 2, 2, 1, 3, 5.5, globals);
  renderFlowFn(svgEl, 2, 2, 1, 6, 6.5, globals);
  renderFlowFn(svgEl, 2, 2, 1, 9, 7.5, globals);
  renderRowFn(svgEl, 3, 3, 5.5, globals);
  renderAnnotationFn(svgEl, 1, 2, 3, 1, 10, "rgb(16, 150, 24)", globals);
  renderAnnotationFn(svgEl, 1, 2, 6, 1, 10, "rgb(16, 150, 24)", globals);
  renderAnnotationFn(svgEl, 1, 2, 9, 1, 10, "rgb(16, 150, 24)", globals);
  renderAnnotationFn(svgEl, 1, 3, 3, 1, -50, "rgb(220, 18, 18)", globals);
  renderAnnotationFn(svgEl, 1, 1, 3, 1, 30, "rgb(153, 0, 153)", globals);
  renderAnnotationFn(svgEl, 1, 1, 10, 1, 30, "rgb(153, 0, 153)", globals);
}

fig0_setup();
