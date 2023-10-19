$(document).ready(function(){
    $("#wpx").change(function(){
        var width1 =$("#wpx").val();
        $("img").attr("width",width1 + "px" );
    });
});
  $("#wp").change(function(){
    var percent =$("#wp").val();
    $("img").attr("width",percent + "%" );
  });
  $("#hpx").change(function(){
    var height1 =$("#hpx").val();
    $("img").attr("height", height1 + "px");
  });
  $("#hp").change(function(){
    var height2 =$("#hp").val();
    $("img").attr("height",height2 + "%" );
  });
$("#link").change(function(){
    $("img").click(function(){
        var link =$("#link").val();
        if($("#check").is(":checked")){
            window.open(link,"_blank");
        }
        else{
            $("#a").attr("href",link);
        }
    });
});
