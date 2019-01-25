var renderRowFn = function(el, row, width, offset, globals) {
  var htmlStr = '';

  for (var d = 0; d >= 0; d--) {
    var xPos = offset * globals.box_width;
    var yPos = (row - 1) * (globals.box_height + globals.row_space);
    xPos += d * globals.perspective_shift;
    yPos += d * globals.perspective_shift;

    var cube_depth = globals.perspective_shift - globals.perspective_spacing;
    for (var i = 0; i < width; i++) {
      htmlStr += '<rect data-id="feature_' + row + '_' + (offset+i) + '" class="feature feature_' + row + '_' + (offset+i) + '" x="' + xPos + '" y="' + yPos + '" width="' + globals.box_width + '" height="' + globals.box_height + '" style="fill:rgb(255,255,255);stroke-width:' + globals.stroke_width + ';stroke:rgb(140,140,140)" />';
      // Draw the bottom slanted face of the cube.
      htmlStr += '<path data-id="featurebottom_' + row + '_' + (offset+i) + '" class="feature featurebottom_' + row + '_' + (offset+i) + '" stroke="rgb(140,140,140)" d="M' + xPos + ' ' + (yPos + globals.box_height) + ' l' + cube_depth + ' ' + cube_depth + ' l' + globals.box_width + ' 0 l-' + cube_depth + ' -' + cube_depth + ' Z" fill-opacity="null" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="rgb(255,255,255)"/>'
      // Draw the right side slanted face of the cube.
      htmlStr += '<path data-id="featureside_' + row + '_' + (offset+i) + '" class="feature featureside_' + row + '_' + (offset+i) + '" stroke="rgb(140,140,140)" d="M' + (xPos + globals.box_width) + ' ' + yPos + ' l' + cube_depth + ' ' + cube_depth + ' l0 ' + globals.box_height + ' l-' + cube_depth + ' -' + cube_depth + ' Z" fill-opacity="null" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="rgb(255,255,255)"/>'
      xPos += globals.box_width;
    }
  }

  el.innerHTML += htmlStr;  
};

var renderRowFillFn = function(el, row, width, offset, globals) {
  var xPos = (offset * globals.box_width) + globals.box_inner_padding;
  var yPos = ((row - 1) * (globals.box_height + globals.row_space)) + globals.box_inner_padding;
  var boxWidth = globals.box_width - globals.box_inner_padding * 2;
  var boxHeight = globals.box_height - globals.box_inner_padding * 2;
  var htmlStr = '';
  for (var i = 0; i < width; i++) {
    htmlStr += '<rect x="' + xPos + '" y="' + yPos + '" width="' + boxWidth + '" height="' + boxHeight + '" style="fill:rgb(138,159,236);" rx="5" ry="5" />';
    xPos += globals.box_width;
  }
  el.innerHTML += htmlStr;  
};

var renderFlowFn = function(el, row, width1, width2, offset1, offset2, globals, opt_row_height, opt_render_dotted_lines) {
  if (opt_row_height === undefined) {
    opt_row_height = 1;
  }

  var htmlStr = '';

  var xPos1_1 = offset1 * globals.box_width;
  var xPos1_2 = xPos1_1 + (globals.box_width * width1);
  var xPos2_1 = offset2 * globals.box_width;
  var xPos2_2 = xPos2_1 + (globals.box_width * width2);
  var yPos1 = ((row - 1) * (globals.box_height + globals.row_space)) + globals.box_height;
  var yPos2 = ((row + (opt_row_height - 1)) * (globals.box_height + globals.row_space));

  var dashed_str = opt_render_dotted_lines ? ' stroke-dasharray="4"' : '';

  htmlStr += '<path data-id="flow_' + (row + opt_row_height) + '_' + offset2 + '" class="flow flow_' + (row + opt_row_height) + '_' + offset2 + '" data-offset1="' + offset1 + '" data-width1="' + width1 + '" data-rowheight="' + opt_row_height + '" stroke="#8a9fec" d="M' + xPos1_1 + ' ' + yPos1 + ' C ' + xPos1_1 + ' ' + (yPos1 + 50) + ', ' + xPos2_1 + ' ' + (yPos2 - 50) + ', ' + xPos2_1 + ' ' + yPos2 + ' L' + xPos2_2 +' ' + yPos2 + ' C ' + xPos2_2 + ' ' + (yPos2 - 50) + ', ' + xPos1_2 + ' ' + (yPos1 + 50) + ', ' + xPos1_2 + ' ' + yPos1 + ' Z" opacity="0.5" fill-opacity="null" stroke-opacity="null" stroke-width="' + globals.stroke_width + '"' + dashed_str + '" fill="rgb(224,234,250)"/>';

  el.innerHTML += htmlStr;
};

var renderFlowAnnotationFn = function(el, row, width1, width2, offset1, offset2, direction, color, globals) {
  var htmlStr = '';

  var xPos1_1 = offset1 * globals.box_width;
  var xPos1_2 = xPos1_1 + (globals.box_width * width1);
  var xPos2_1 = offset2 * globals.box_width;
  var xPos2_2 = xPos2_1 + (globals.box_width * width2);
  var yPos1 = ((row - 1) * (globals.box_height + globals.row_space)) + globals.box_height;
  var yPos2 = ((row - 0) * (globals.box_height + globals.row_space)) - (globals.row_space / 2);
  if (direction != 0) {
    yPos1 += globals.box_height + globals.perspective_shift + 2;
    yPos2 += globals.box_height + globals.perspective_shift + 2;
  }

  htmlStr += '<path stroke="' + color + '" d="M' + xPos1_1 + ' ' + yPos1 + ' C ' + xPos1_1 + ' ' + (yPos1 + 50) + ', ' + xPos2_1 + ' ' + (yPos2 - 50) + ', ' + xPos2_1 + ' ' + yPos2 + ' L' + xPos2_2 +' ' + yPos2 + ' C ' + xPos2_2 + ' ' + (yPos2 - 50) + ', ' + xPos1_2 + ' ' + (yPos1 + 50) + ', ' + xPos1_2 + ' ' + yPos1 + ' Z" opacity="1.0" fill-opacity="0.0" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="' + color + '"/>';

  el.innerHTML += htmlStr;
};

var renderArrowFn = function(el, row, offset, globals) {
  var htmlStr = '';

  var xPos1 = (offset - 0.5) * globals.box_width;
  var xPos2 = (offset) * globals.box_width;
  var xPos3 = (offset + 0.5) * globals.box_width;
  var yPos1 = ((row - 1) * (globals.box_height + globals.row_space)) - (globals.box_height * 1.5) - 10;
  var yPos2 = ((row - 1) * (globals.box_height + globals.row_space)) - (globals.box_height / 2) - 10;
  var yPos3 = ((row - 1) * (globals.box_height + globals.row_space)) - 10;

  htmlStr += '<path stroke="rgb(89,89,89)" d="M' + (xPos2 - 1) + ' ' + yPos1 + ' L ' + (xPos2 - 1) + ' ' + yPos2 + ' L' + (xPos1 + 10) +' ' + yPos2 + ' L ' + xPos2 + ' ' + (yPos3 - 3) + ' L ' + (xPos3 - 10) + ' ' + yPos2 + ' L ' + (xPos2 + 1) + ' ' + yPos2 + ' L ' + (xPos2 + 1) + ' ' + yPos1 + ' Z" opacity="1.0" fill-opacity="1.0" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="rgb(89,89,89)"/>';

  el.innerHTML += htmlStr;
};

var recursiveFlowUnhide = function(row, offset) {
  var featureEls = document.querySelectorAll(".feature_" + row + "_" + offset);
  for (var i = 0; i < featureEls.length; i++) {
    featureEls[i].style.fill = "rgb(224,234,250)";
  }
  var featureBottomEls = document.querySelectorAll(".featurebottom_" + row + "_" + offset);
  for (var i = 0; i < featureBottomEls.length; i++) {
    featureBottomEls[i].style.fill = "rgb(224,234,250)";
  }
  var featureSideEls = document.querySelectorAll(".featureside_" + row + "_" + offset);
  for (var i = 0; i < featureSideEls.length; i++) {
    featureSideEls[i].style.fill = "rgb(224,234,250)";
  }

  var flowEls = document.querySelectorAll(".flow_" + row + "_" + offset);
  for (var j = 0; j < flowEls.length; j++) {
    flowEls[j].style.display = "block";
    for (var i = parseInt(flowEls[j].dataset.offset1); i < parseInt(flowEls[j].dataset.offset1) + parseInt(flowEls[j].dataset.width1); i++) {
      recursiveFlowUnhide(row - flowEls[j].dataset.rowheight, i);
    }
  }
};

var renderSingleFlowStack = function(event) {
  var featureNodes = document.querySelectorAll(".feature");
  for (var i=0; i < featureNodes.length; i++) {
    featureNodes[i].style.fill = "rgb(255, 255, 255)";
  }
  var flowNodes = document.querySelectorAll(".flow");
  for (var i=0; i < flowNodes.length; i++) {
    flowNodes[i].style.display = "none";
  }
  var data = this.dataset.id.split("_");
  recursiveFlowUnhide(data[1], data[2]);
};

