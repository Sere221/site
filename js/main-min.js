function slowScroll(e){return $("html, body").animate({scrollTop:$(e).offset().top-25},500),!1}function resizeVideo(){$("iframe").each(function(){let e=$(this).width();$(this).css("height",e/1.77+"px")})}$(".header-top .menu").on("click",function(){$("header .mobile-menu").is(":visible")?$(this).html("Меню"):$(this).html("Назад"),$("header .mobile-menu").slideToggle()}),$("#subscribe").on("click",function(){let e=$("#email").val();2==(e=e.trim()).split("@").length&&2==e.split(".").length||($("#sub_form label").text("Вы ввели неверный email"),$("#sub_form label").fadeInt()),setTimeout(function(){$("#sub_form label").fadeOut()},1500)}),$(".video-play, #modal-video .cls-btn").on("click",function(){$("#modal-video").toggle(),$("body").toggleClass("overflow-hidden"),resizeVideo()}),$(window).on("resize",function(){resizeVideo()}).resize();