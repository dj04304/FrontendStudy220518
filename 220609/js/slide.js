$(document).ready(function(){
    var current = 0; 
    var setIntervalid;

    $("#main_img .btns > li").click(function(){
       var i = $(this).index();
        move(i);
    });

    $("#main_img .lbtn").on({
        click:function(){
            var i = current + 1;
            if(i == 3){
                i = 0;
            }
            move_2(i);
        }
    });

    $("#main_img .rbtn").on({
        click:function(){
            var i = current + 1;
            if(i == 3){
                i = 0;
            }
            move(i);
        }
    });

    $("#main_img").on({
        mouseover:function(){
            clearInterval(setIntervalid);//자동실행이 멈춤
        },
        mouseout:function(){
            timer(); //마우스 나갈 때, 다시 움직임
        }
    });

    timer();
    
    function timer(){
        setIntervalid = setInterval(function(){
            var i = current + 1;
            if(i == 3){
                i = 0;
            }
            move(i);
        },3000);
    }

    function move(n){
        var currentEl = $(".imgs li").eq(current)
        var nextEl = $(".imgs li").eq(n)

        currentEl.css({left:"0%"}).animate({left:"-100%"}); //첫번째 이미지를 -100프로로 해준다.
        nextEl.css({left:"100%"}).animate({left:"0%"}); //

        current = n;
    }

    function move_2(n){
        var currentEl = $(".imgs li").eq(current)
        var nextEl = $(".imgs li").eq(n)

        currentEl.css({left:"0%"}).animate({left:"100%"}); //첫번째 이미지를 -100프로로 해준다.
        nextEl.css({left:"-100%"}).animate({left:"0%"}); //

        current = n;
    }
//팝업창

    $("#popup").show();

    $(".close_btns").click(function(){
        $("#popup").hide();
    });
});