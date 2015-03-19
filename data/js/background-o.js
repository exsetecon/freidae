var bgcount_lg = 44;
var bgcount_sm = 13;
function changebg() {
    if(location.pathname=="/")
    {
        $('#home').css("color","#660000");
        if(screen.width>991)
        {
            var num =  Math.ceil( Math.random() * bgcount_lg );
            document.body.style.background = 'url(/data/img/backgrounds_lg/BackgroundImage'+num+'.jpg)';
        }
        else
        {
            var num =  Math.ceil( Math.random() * bgcount_sm );
            document.body.style.background = 'url(/data/img/backgrounds_sm/BackgroundImage'+num+'.jpg)';
        }
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = '100% 100%';
            document.body.style.backgroundOrigin = 'border-box';
            document.body.style.backgroundAttachment = 'fixed';
            document.body.style.backgroundPosition = 'center center';
    }   else if(location.pathname=="/products/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#C9B199';
        $('#prdct').css("color","#660000");

    }   else if(location.pathname=="/reach_us/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#986665';
        $('#rchus').css("color","#660000");
    }   else if(location.pathname=="/pricing/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#cccccc';
        $('#prcng').css("color","#660000");
    }   else if(location.pathname=="/about_us/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = 'rgba(0,51,102,0.9)';
        $('#abts').css("color","#660000");
    }   else if(location.pathname=="/jobs/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#9999cc';
        $('#jbs').css("color","#660000");
    }   else if(location.pathname=="/privacy/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#ffff99';
        $('/#prvcy').css("color","#660000");
    }   else if(location.pathname=="/help/"){
        document.body.style.background = 'url(#)';
        document.body.style.backgroundColor = '#3366ff';
        $('#hlp').css("color","#660000");
    }
}
changebg();
