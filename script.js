$(document).ready(function() {
	$("#error").hide();

	   $("#usr").keyup(function(){
            var username = $("#usr").val();
            if(username.trim().length<2){
                $("#errorusr").show();
            }
            else if(username.trim().length>2)
            	$("#errorusr").hide();
        });
        $("#pwd").keyup(function(){
            var password = $("#pwd").val();
            if(password.trim().length<2){
                $("#errorpwd").show();

            }
             else if (password.trim().length>2)
                	$("#errorpwd").hide();

	  });

  $("#button").click(function(){
  	    var username=$("#usr").val();
  	    var password=$("#pwd").val();
    if(username.trim().length<2 || password.trim().length<2 ){
    $("#error").show();
    
    }

    else
    {
$("#error").hide();






    }
    });




      


});

 