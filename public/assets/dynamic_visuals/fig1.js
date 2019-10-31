var fig1_globals = globals;
if (mobile) {
  fig1_globals = mobile_globals;
}
for (var i = 0; i < 5; i++) {
  positionElByRowHeightFn("fig1_svg", "fig1_f"+i, i+1, fig1_globals);
}
for (var i = 1; i < 5; i++) {
  positionElByRowHeightFn("fig1_svg", "fig1_params_l"+i, i, fig1_globals, true);
}

var svgEl = document.getElementById("fig1_svg");
DEFAULT_WIDTH = 13;
DEFAULT_INDENT = 4;
var redoRendering = function(svgEl) {
  svgEl.innerHTML = "";
  renderRowFn(svgEl, 1, DEFAULT_WIDTH, DEFAULT_INDENT, fig1_globals);
  // k=kernel size, p=padding size, s=stride, w=feature width, i=indent
  var params = [
    {"k": -1, "p": -1, "s": -1, "w": DEFAULT_WIDTH, "i": DEFAULT_INDENT}
  ];
  for (var i = 1; i <= 4; i++) {
    var kernel_size = parseInt(document.getElementById("slider_k" + i).value);
    document.getElementById("value_k" + i).innerText = kernel_size;
    var padding = parseInt(document.getElementById("slider_p" + i).value);
    document.getElementById("value_p" + i).innerText = padding;
    var stride = parseInt(document.getElementById("slider_s" + i).value);
    document.getElementById("value_s" + i).innerText = stride;
    var input_fw = params[i-1]["w"];
    var padded_input_fw = input_fw + (2 * padding);
    var output_fw = Math.ceil((padded_input_fw-(kernel_size-1))/stride);
    var output_indent = Math.max(0, params[i-1]["i"] - Math.ceil((output_fw - input_fw)/2));
    
    params.push({"k": kernel_size, "p": padding, "s": stride, "w": output_fw, "i": output_indent});
    if (document.getElementById("value_error" + i)) {
      document.getElementById("value_error" + i).style.display = output_fw < 1 ? "block" : "none";
    }
    flowStack = [];
    for (var j=0, k=0; kernel_size+k-1 < padded_input_fw; k += stride, j++) {
      //renderFlowFn = function (el, row, width1, width2, offset1, offset2, fig1_globals)
      renderFlowFn(svgEl, i, kernel_size, 1, params[i-1]["i"]-padding+k, output_indent+j, fig1_globals, undefined, i==2);
    } 
    renderRowFn(svgEl, i+1, output_fw, output_indent, fig1_globals);
  }
  var featureNodes = document.getElementById("fig1_svg").querySelectorAll(".feature");
  for (var i=0; i < featureNodes.length; i++) {
    featureNodes[i].addEventListener("mouseenter", renderSingleFlowStack);
  }
};
var nodes = document.getElementById("fig1_svg").parentNode.querySelectorAll("input");
for (var i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("input", redoRendering.bind(this, svgEl));
}

redoRendering(svgEl);
