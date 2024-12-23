$(document).ready(function () {//시작


    //풀페이지 함수 호출
    var page = $(".fullpage").fullpage({
        autoScrolling: true,
        responsiveWidth: 1200,  // 900px 이하의 넓이 화면에서는 autoScrolling 비활성화
          responsiveSlides: true,
          fitToSection: false, // 작은 화면에서 fitToSection 비활성화
        parallax: true, // 작은 화면에서의 부드러운 스크롤링


        verticalCentered: false,
        afterLoad: function(origin, destination, direction) {
            console.log('afterLoad triggered');
        },
        onLeave: function (index, nextindex, direction) {
            if (nextindex == 1) {
                $("#header").removeClass("on");
                $("#header h1 img").attr("src","img/Desktop/logo_white.png");
            }
            else {
                $("#header").addClass("on");
                $("#header h1 img").attr("src","img/Desktop/logo_blue.png");
            }
        }
    });

    // 페이지 로딩 후 강제로 리사이즈 이벤트를 트리거
    window.addEventListener('load', () => {
        window.dispatchEvent(new Event('resize'));
    });

  


    //business


    $(function () {
        $(window).resize(function () {
            var width = $(window).width();
            if (width >= 1200) {
                $("#business ul li").eq(2).addClass("active");
                $("#business ul li").mouseenter(function () {
                    $(this).addClass("active").siblings().removeClass("active");
                })
            }
            else if (width < 1200) {
                $("#business ul li").removeClass("active");

            }
        });

      
    });

    var service = new Swiper(".service", {
        slidesPerView: 1.5,  //초기값 설정 모바일값이 먼저!!
        spaceBetween: 20,
        autoplay: {
           delay: 3000,
           disableOnInteraction: false,
         },
     loop:true,
     breakpoints: {
       
        768: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
      });


     document.querySelectorAll('.notice-txt').forEach(function(box) {
        box.addEventListener('mouseenter', function() {
          this.classList.add('open');
        });
      
        box.addEventListener('mouseleave', function() {
          this.classList.remove('open');
        });
      });

})//끝7