$(document).ready(function() {
    $('#content').keyup(function(){
        if ($('#content').val().length != 0) {
            $('#content').addClass("textJustify");
        }
        else {
            $('#content').removeClass("textJustify");
        }
    });
});
