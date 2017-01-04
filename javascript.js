/*
This function is fired when the webpage is loaded
*/
$(document).ready(function(){
   $(".all-content").hide(); 
});

/*
When someone clicks goals-button we should hide all-content 
and then show only goals-content
*/
$("#goals-button").click(function(){
    $(".all-content").hide();
    $("#goals-content").show();
});


/*
When someone clicks the info button we should hide all-content 
and then show only info-content
*/
$("#info-button").click(function(){
    $(".all-content").hide();
    $("#info-content").show();
});
$("#past-button").click(function(){
    $(".all-content").hide();
    $("#past-content").show();
});


$("#dark-button").click(function(){
    $("body").css("background-color","black");
   $(".all-content").css("color","white");
});
$("#donotpress-button").click(function(){
    alert("DO NOT PRESS");
});
$("#take-over-button").click(function(){
 $(".all-content").hide();
    $("#takeover-content").show();
});
$("#takeover-form-button").click(function(){
    var name=$("#takeover-input").val();
    $("#site-title").html("This website belongs to:" + name);
    $("#takeover-input").val("");
    $("#site-title").css("background-color","#800020");
   $("#site-title").css("color","white");
});
    