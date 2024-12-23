$(document).ready(function () {

    /* all-wrap */

    if ($(window).width() < 1200) {

        $(".all-depth2").hide();
        $(".all-gnb > li").click(function () {
            if ($(this).children(".all-depth2").css("display") == "none") {
                $(this).children(".all-depth2").slideDown();
                $(this).siblings().children(".all-depth2").slideUp();
            }
            /* 
                        else {
                            $(this).children(".all-depth2").slideUp();
                        } */
        });

    }


    $(window).on("resize", function () {
        var WinW = $(window).width();
        if (WinW < 1200) {  //1200px 보다 큰 경우 이벤트 해제

            $(".all-depth2").hide();
            $(".all-gnb > li").click(function () {
                if ($(this).children(".all-depth2").css("display") == "none") {
                    $(this).children(".all-depth2").slideDown();
                    $(this).siblings().children(".all-depth2").slideUp();
                }

                /*       else {
                          $(this).children(".all-depth2").slideUp();
                      } */
            });


        } else {
            $(".all-depth2").show();
        }
    });


    $(".all-close").click(function () {
        $("#all-wrap").fadeOut();

    })


    /* header */
    $("#all-wrap").hide();
    $(".ham-btn").click(function () {

        if ($(".ham-btn").hasClass("close") === true) {

            $("#all-wrap").fadeOut();
            $(this).removeClass("close");

        } else {

            $("#all-wrap").fadeIn();
            $(this).addClass("close");

        }

    })

    $(".depth2, .depth2-bg").hide();

    $(".gnb > li").mouseenter(function () {

        $(".depth2-bg").stop().fadeIn();
        $(this).children(".depth2").stop().fadeIn();
    })

    $(".gnb > li").mouseleave(function () {

        $(".depth2-bg").stop().fadeOut();
        $(this).children(".depth2").stop().fadeOut();
    });


})