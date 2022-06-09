$(document).ready(function(){
        $(".submn").hide();

        $(".main_nav li").mouseover(function(){
            $(this).find(".submn").show();
        });

        $(".main_nav li").mouseout(function(){
            $(this).find(".submn").hide();
        });
});