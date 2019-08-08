function topfive(){
    $(".tapbtn").removeClass("on");
    $(".tapbtn1").addClass("on");
    $("#top5").addClass("on");
    $("#top10").removeClass("on");
};
function topten(){
    $(".tapbtn").removeClass("on");
    $(".tapbtn2").addClass("on");
    $("#top10").addClass("on");
    $("#top5").removeClass("on");
};

$(document).ready(function(){
    
    $(".main_nav,.inner_contain").mouseenter(function(){
      $(".inner_contain").addClass("on"); 
    });
    $(".main_nav,.inner_contain").mouseleave(function(){
        $(".inner_contain").removeClass("on");
    });
    
    var mainNav = $(".main_nav li");
    $(mainNav).mouseenter(function(){
        var idx = $(this).index();
        var dropMenu = $(".drop_menu");
        
        $(dropMenu).removeClass("on");
        $(dropMenu[idx]).addClass("on");
        
        $(dropMenu).mouseenter(function(){
            $(dropMenu).removeClass("on");
            $(this).addClass("on"); 
        });
    });
});

    
