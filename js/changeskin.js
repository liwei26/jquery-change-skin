$(document).ready(function () {
  $("#hide li").click(function () {
    var skin = $(this).attr("id");
    $('#skin_css_file').attr('href','./style/'+skin+'/index.css')
    $.cookie("skin_name", skin);
  });

  var skin = $.cookie("skin_name");
  if (skin != null) {
    $('#skin_css_file').attr('href','./style/'+skin+'/index.css')
  }

})


