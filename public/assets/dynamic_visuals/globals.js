var globals = {
  "box_width": 30,
  "box_height": 30,
  "box_inner_padding": 5,
  "row_space": 100,
  "perspective_shift": 18,
  "perspective_spacing": 4,
  "stroke_width": 1
};
var mobile_globals = {
  "box_width": 15,
  "box_height": 15,
  "box_inner_padding": 5,
  "row_space": 125,
  "perspective_shift": 18,
  "perspective_spacing": 4,
  "stroke_width": 1
};

var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var mobile = viewport_width < 600;
