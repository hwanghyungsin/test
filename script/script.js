
//         $(document).ready(function () {
//     
//     $(".news_contents").mouseover(function () {
//         $(".news_contents img",this).css("filter", "grayscale(0%)");
//     });

//     
//     $(".news_contents").mouseout(function () {
//         $(".news_contents img",this).css("filter", "grayscale(100%)");
//     });
// });



// 햄버거메뉴 클릭시 nav나옴
$(function(){
    $(".ham_btn").click(function(){
        $(".hammenu2").css({
            display:'block'
        },500);
    });

    $(".ham_x").click(function(){
        $(".hammenu2").css({
            display:'none'
        },500);
    });
})





// // news mouseover시 효과
$(document).ready(function() {
            $('.news_contents').on('mouseover', function() {
                $(this).css({
                    transform: 'translateY(-10px)' 
                });
            });

           
            $('.news_contents').on('mouseout', function() {
                $(this).css({
                    transform: 'translateY(0)'
                });
            });
        });




//   // button mouseover시 width값 변경

  $(document).ready(function() {
    $('.news_btn').on('mouseover', function() {
        $(this).stop().animate({
            width:'180px'

        },200);
    });

   
    $('.news_btn').on('mouseout', function() {
        $(this).stop().animate({
            width:'160px'
        },200);
    });
});

$(document).ready(function() {
    $('.recordings_btn').on('mouseover', function() {
        $(this).stop().animate({
            width:'236px'

        },200);
    });

   
    $('.recordings_btn').on('mouseout', function() {
        $(this).stop().animate({
            width:'216px'
        },200);
    });
});
  
        



// recordings slick 슬라이드
$(function(){
    $(".albumbox").slick({
        adaptiveHeight: true,
        slidesToShow:4,
        infitite:true,
        arrows:true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint:767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
    });
})



// // header 효과
$(function(){
        
    let win = $(window) //전체
    let header = $("header") //헤더
    let spot = header.offset().top //기준위치값
    //offset().top > 선택한 요소의 기준위치를 찾음
    //position()은 해당 요소가 위치할 떄의 기준이 되는 부모 요소가 기준

    console.log(spot)

    win.scroll(function(){
        if(win.scrollTop()>spot){
//win scrollTop값(스크롤을 더 내릴수록 값이 커짐) > spot header의 position값보다 더 커지는 순간 fix생김 
            header.addClass("fix");
        } else{
            header.removeClass("fix");
        }
        //현재창이 스크롤탑값 보다 커지는 순간 fix(검은 메뉴바)추가
    });

   
});




// video mouseover시 재생버튼
function togglePlayPause() {
    let video = document.querySelector('video');
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }


 // 스크롤 시 애니메이션효과
 $(function(){
     AOS.init();
 });
 
