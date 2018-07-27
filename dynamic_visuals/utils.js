var renderRowFn = function(el, row, width, offset, globals) {
  var htmlStr = '';

  for (var d = 0; d >= 0; d--) {
    var xPos = offset * globals.box_width;
    var yPos = (row - 1) * (globals.box_height + globals.row_space);
    xPos += d * globals.perspective_shift;
    yPos += d * globals.perspective_shift;

    var cube_depth = globals.perspective_shift - globals.perspective_spacing;
    for (var i = 0; i < width; i++) {
      htmlStr += '<rect id="feature_' + row + '_' + (offset+i) + '" class="feature" x="' + xPos + '" y="' + yPos + '" width="' + globals.box_width + '" height="' + globals.box_height + '" style="fill:rgb(255,255,255);stroke-width:' + globals.stroke_width + ';stroke:rgb(140,140,140)" />';
      // Draw the bottom slanted face of the cube.
      htmlStr += '<path id="featurebottom_' + row + '_' + (offset+i) + '" class="feature" stroke="rgb(140,140,140)" d="M' + xPos + ' ' + (yPos + globals.box_height) + ' l' + cube_depth + ' ' + cube_depth + ' l' + globals.box_width + ' 0 l-' + cube_depth + ' -' + cube_depth + ' Z" fill-opacity="null" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="rgb(255,255,255)"/>'
      // Draw the right side slanted face of the cube.
      htmlStr += '<path id="featureside_' + row + '_' + (offset+i) + '" class="feature" stroke="rgb(140,140,140)" d="M' + (xPos + globals.box_width) + ' ' + yPos + ' l' + cube_depth + ' ' + cube_depth + ' l0 ' + globals.box_height + ' l-' + cube_depth + ' -' + cube_depth + ' Z" fill-opacity="null" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="rgb(255,255,255)"/>'
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

var renderFlowFn = function(el, row, width1, width2, offset1, offset2, globals) {
  var htmlStr = '';

  var xPos1_1 = offset1 * globals.box_width;
  var xPos1_2 = xPos1_1 + (globals.box_width * width1);
  var xPos2_1 = offset2 * globals.box_width;
  var xPos2_2 = xPos2_1 + (globals.box_width * width2);
  var yPos1 = ((row - 1) * (globals.box_height + globals.row_space)) + globals.box_height;
  var yPos2 = ((row - 0) * (globals.box_height + globals.row_space));

  htmlStr += '<path id="flow_' + (row + 1) + '_' + offset2 + '" class="flow" data-offset1="' + offset1 + '" data-width1="' + width1 + '" stroke="#8a9fec" d="M' + xPos1_1 + ' ' + yPos1 + ' C ' + xPos1_1 + ' ' + (yPos1 + 50) + ', ' + xPos2_1 + ' ' + (yPos2 - 50) + ', ' + xPos2_1 + ' ' + yPos2 + ' L' + xPos2_2 +' ' + yPos2 + ' C ' + xPos2_2 + ' ' + (yPos2 - 50) + ', ' + xPos1_2 + ' ' + (yPos1 + 50) + ', ' + xPos1_2 + ' ' + yPos1 + ' Z" opacity="0.5" fill-opacity="null" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="rgb(224,234,250)"/>';

  el.innerHTML += htmlStr;
};

var renderFlowAnnotationFn = function(el, row, width1, width2, offset1, offset2, direction, globals) {
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

  htmlStr += '<path id="flow_' + (row + 1) + '_' + offset2 + '" class="flow" data-offset1="' + offset1 + '" data-width1="' + width1 + '" stroke="rgb(140,140,140)" d="M' + xPos1_1 + ' ' + yPos1 + ' C ' + xPos1_1 + ' ' + (yPos1 + 50) + ', ' + xPos2_1 + ' ' + (yPos2 - 50) + ', ' + xPos2_1 + ' ' + yPos2 + ' L' + xPos2_2 +' ' + yPos2 + ' C ' + xPos2_2 + ' ' + (yPos2 - 50) + ', ' + xPos1_2 + ' ' + (yPos1 + 50) + ', ' + xPos1_2 + ' ' + yPos1 + ' Z" opacity="1.0" fill-opacity="0.4" stroke-opacity="null" stroke-width="' + globals.stroke_width + '" fill="rgb(140,140,140)"/>';

  el.innerHTML += htmlStr;
};

var recursiveFlowUnhide = function(row, offset) {
  var featureEl = document.querySelector("#feature_" + row + "_" + offset);
  if (featureEl) { featureEl.style.fill = "rgb(224,234,250)"; }
  var featureBottomEl = document.querySelector("#featurebottom_" + row + "_" + offset);
  if (featureBottomEl) { featureBottomEl.style.fill = "rgb(224,234,250)"; }
  var featureSideEl = document.querySelector("#featureside_" + row + "_" + offset);
  if (featureSideEl) { featureSideEl.style.fill = "rgb(224,234,250)"; }

  var flowEl = document.querySelector("#flow_" + row + "_" + offset);
  if (flowEl) {
    flowEl.style.display = "block";
    for (var i = parseInt(flowEl.dataset.offset1); i < parseInt(flowEl.dataset.offset1) + parseInt(flowEl.dataset.width1); i++) {
      recursiveFlowUnhide(row - 1, i);
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
  var data = this.id.split("_");
  recursiveFlowUnhide(data[1], data[2]);
};

