$(document).ready(function(){
$(window).scroll(function() {
    if ($(this).scrollTop() > 15){
        $('nav').addClass("shrink");
    }
    else{
        $('nav').removeClass("shrink");
    }
});
});
