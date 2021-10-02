// 1 км стоит 40руб




$(".raschet").click(function() {

  if (!$(".result")) {
    const value = $(".vvod").val();
    const result = value * 40;
    $(".wrapper-result").append("<div class='result'>" + result +" рублей" + "</div>");
    };

  if($(".result")) {
    $(".result").remove();

    const value = $(".vvod").val();
    const result = value * 40;
    $(".wrapper-result").append("<div class='result'>" + result +" рублей" + "</div>");
  }
});


$(".section-one-article-link").click(function() {
  alert("Будет подробнее, когда будет контент), можешь попробовать рассчитать стоимсть поездки");
});


$(".section-three-item").click(function() {
  alert("Услуг пока нет, сайт не рабочий а выдумывать мне лень, можешь попробовать рассчитать стоимсть поездки или поклацать по другим кнопкам и ссылкам на сайте");
});

$("#work").click(function() {
  alert("На данный момент вакансий нет");
});



$(".next-button").click(function() {
  $(".section-one-img1").remove();
  $(".section-one-img").append("<img class='section-one-img1' src='img/img4.png' alt='Грузовик'>");
});

$(".back-button").click(function() {
  $(".section-one-img1").remove();
  $(".section-one-img").append("<img class='section-one-img1' src='img/img3.png' alt='Грузовик'>");
});


