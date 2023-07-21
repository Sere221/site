//функция, что позволяет скролить к нужным объектам
function slowScroll(id) {
    $("html, body").animate({
        scrollTop: $(id).offset().top - 25
    }, 500);
    return false;
};

$(".header-top .menu").on("click", function() {
  if($("header .mobile-menu").is(":visible"))
    $(this).html('Меню');
  else
    $(this).html('Назад');
  $("header .mobile-menu").slideToggle();
});

$("#subscribe").on("click", function() {
  let email = $("#email").val();
  email = email.trim();
  if(email.split("@").length != 2 || email.split(".").length != 2)
  {
    $("#sub_form label").text("Вы ввели неверный email");
    $("#sub_form label").fadeInt();
  }

  setTimeout(function() {
    $("#sub_form label").fadeOut();
  }, 1500);
});

//Вкл выкл видео
$('.video-play, #modal-video .cls-btn').on('click', function() {
    $("#modal-video").toggle();
    $("body").toggleClass("overflow-hidden");
    resizeVideo();
  });
  
  $(window).on('resize', function() {
    resizeVideo();
  }).resize();
  //Изменение окна
  function resizeVideo() {
    $("iframe").each(function() {
      let width = $(this).width();
      $(this).css("height", width / 1.77 + "px");
    });
  }
  
