$(document).ready(function () {

  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);

  });

});

function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (top > 0) {
    window.scrollBy(0, ((top + 100) / -10));
    t = setTimeout('up()', 20);
  } else clearTimeout(t);
  return false;
}

if ($(window).width() <= 575) {
  $(function () {
    $('.menu-open').click(function () {
      $('.menu').addClass('show-menu');
      $(".show-menu").toggle({ duration: 860 });
      $(".show-menu").css("display", "grid");
    })

    $('.img-close').click(function () {
      $(".show-menu").toggle({
        duration: 860,
        complete: () => $('.menu').removeClass('show-menu')
      });
    })
  });
}
else {
  $(".menu").css("display", "block")
  }