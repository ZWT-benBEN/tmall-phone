
//banner

$(function(){

    var item=$('.bannerbox .item');
    var flag=true;
    var dian=$('.point li')
    var move=function(n,dir){
        var active=$('.item.active');
        var fdir=(dir==="left")?"right":"left";
        active.addClass(dir)
            .delay(800)
            .queue(function(){
                $(this).removeClass(dir )
                    .removeClass('active')
                    .dequeue();
                flag=true;
            })
        $(n).addClass(fdir);
        $(n) .get(0).offsetWidth;
        $(n) .removeClass(fdir)
            .addClass('active');
    }

    var t = setInterval(function(){
        $('.banner .zuo').trigger('click')
    },2000)

    $('.banner .zuo').on('click',function(){
        var active=$('.bannerbox .active');
        var now=active.next();
        if(flag){
            if(now.length){
                now=active.next();
            }else{
                now=item.eq(0)
            }
            move(now,'left');
            flag=false;
            dian.removeClass('active');
            var xiabiao=now.index();
            dian.eq(xiabiao).addClass('active')
        }else{
            return;
        }
    })
    $('.banner .you').on('click',function(){
        var active=$('.bannerbox .active');
        var now=active.prev();
        if(flag){
            if(now.length){
                now=active.prev();
            }else{
                now=item.eq(-1)
            }
            move(now,'right');
            flag=false;
            dian.removeClass('active');
            var xiabiao=now.index();
            dian.eq(xiabiao).addClass('active')
        }else{
            return;
        }
    })


})