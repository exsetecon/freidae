$(document).ready(function(){
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('nav').addClass("shrink");
    }
    else{
        $('nav').removeClass("shrink");
    }
});
});
