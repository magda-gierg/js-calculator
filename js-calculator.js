$(document).ready(function(){
  var total = "0";
  var flag = true;
  $("#result").text(total);
  total="";
  $(".num_button").click(function () {
    total = total + ($(this).text());
    $("#result").text(total);
    flag = true;
  });

  $(".function_button").click(function(){
    if (flag == true){
      total = total + ($(this).text());
      $("#result").text(total);
      flag = false;}
      else {
        total = total.replace(/.$/,$(this).text());
        $("#result").text(total);
      }
    });

    $("#equal_button").click(function(){
      if (flag == true){
        $("#result").text(eval(total));
        total="";
        flag = false;
      }
    });
    $("#clearAll").click(function(){
      total = "0";
      $("#result").text(total);
      total="";
      flag = false;
    });
    $("#clear").click(function(){
      total=total.slice(0, -1);
      $("#result").text(total);
    });
  });
