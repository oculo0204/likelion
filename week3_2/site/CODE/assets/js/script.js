$(function(){//문서를 로딩한 후에 스크립트를 사용해라
    //슬라이드
    let t=2;
    function slide(){
        if(t>0){
            t--;
        }else{
            t=2;
        }
        $(".slide ul").animate({top:t*(-350)+"px"},1000);
    }
    setInterval(slide, 2000);
    //탭메뉴
    $(".tabmenu li").click(function(){
        $('.tabmenu li').removeClass('on');
        $(this).addClass('on'); //this 클릭한 객체
        let i= $(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
        return false;    //a태그
    })
    //팝업창
    $(".pp").click(function(){
        $(".popup").show();
        return false; //새로고침 방지
    })
    $(".popup button").click(function(){
        $(".popup").hide();
    })
    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

})