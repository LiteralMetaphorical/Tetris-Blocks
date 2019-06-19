window.onload = heightfun;
window.onresize = heightfun;

function heightfun() {
  var height = window.innerHeight;
  $("body").css("height", height - 20 + "px");
}