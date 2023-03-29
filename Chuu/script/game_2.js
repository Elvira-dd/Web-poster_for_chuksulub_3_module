$("#obrabotka_button").click(function () {
  $("#obrabotka_button").css("visibility", "hidden");
  $("#obrabotka_button").css("position", "absolute");
  $("#obrabotka").css("display", "none");
  $("#screen_naming_1_2").text("Запрос №2");
  $("#screen_naming_2_3").text("ПОМОЩЬ НА ПЛАНЕТЕ ");
  $("#screen_naming_2_3").css("display", "block");
  $("#screen_naming_2_3").css("visibility", "visible");
  $(".menu_block").css("pointer-events", "visible");
  $(".menu_block").css("opacity", "1");
  $("#resque_screen").css("display", "flex");
  $("#resque_screen").css("visibility", "visible");
  $("#adding_file").text("нет");
  $("#resque_button_help_usuall").attr("id", "resque_button_group_safe");
  $("#resque_button_group_safe").text(">Отправить группу спасения");
  $("#resque_button_group_volonture").css("display", "block");
  $("#resque_button_help_winter").attr("id", "resque_button_group_tech");
  $("#resque_button_help_winter").remove("#resque_button_help_winter");
  $("#resque_button_group_tech").text(">Отправить техническую группу");
  $("#resque_button_help_hot").attr("id", "resque_button_group_evoq");
  $("#resque_button_group_evoq").text(">Отправить группу временной эвакуации");
  $("#resque_text").text(
    "Добрый день, сообщаем об нападение Бегунов на северный район Финиоку. Планета О-009. Несмотря на незамерзшие реки, они нашли способ переправить на незараженную территорию. Как именно мы не знаем, однако более далекие от реки поселения сообщают, что у  себя Бегунов не замечали. Отправьте нам кого-нибудь, кто поможет с переездом подальше от реки или решит вопрос с Бегунами. Пожалуйста"
  );
  $(".planet").attr("src", "images/planet_2.png");
  $("#info_planet").text("О-009");
  $("#info_center").text("ЦЕНТР ПОМОЩИ №89");
  $("#info_atmosphere").text("агрессивная");
  $("#info_temp").text("12°С ");
  $("#info_wind").text("6м/с ");
  $("#planet_text_2").css("visibility", "visible");
  $("#planet_text_1").css("display", "none");
  $("#screen_resque").click(function () {});
  //НОВЫЙ ЗАПРОС
  $("#screen_resque").click(function () {
    $("#screen_naming_1_2").text("ЗАПРОС №2");
    $("#screen_naming_2_3").text("ПОМОЩЬ НА ПЛАНЕТЕ");
  });
  $(".resque_button_next").click(function () {
    $("#obrabotka_text_2").text("Обработано 2/2 запросов");

    $("#obrabotka_img").attr("src", "images/group_safety.png");

    $("#change").attr("src", "images/change_01.png");
    setTimeout(function () {
      $("#change").attr("src", "images/change_02.png");
    }, 500);
    setTimeout(function () {
      $("#change").attr("src", "images/change_03.png");
    }, 1000);
    setTimeout(function () {
      $("#change").attr("src", "images/change_04.png");
    }, 1500);
    setTimeout(function () {
      $("#change").attr("src", "images/change_05.png");
    }, 2000);
    setTimeout(function () {
      $("#change").attr("src", "images/change_06.png");
    }, 2500);
    setTimeout(function () {
      $("#finish_button").css("visibility", "visible");
      $("#obrabotka_button").css("visibility", "hidden");
    }, 4000);
  });
  $("#resque_button_group_safe").click(function () {
    $("#obrabotka_text_1").text("Группа спасения отправлена на планету О-009");
    correct_ans += 1;
    ans_2 = 1;
  });
  $("#resque_button_group_tech").click(function () {
    $("#obrabotka_text_1").text(
      "Техническая группа отправлена на планету О-009"
    );
  });
  $("#resque_button_group_evoq").click(function () {
    $("#obrabotka_text_1").text(
      "Эвакуационная группа отправлена на планету О-009"
    );
  });
  // $("#resque_button_group_return").click(function () {});
  // $("#resque_button_group_cancel").click(function () {
  //   $("#obrabotka_text_1").text("Группа спасения отправлена на планету О-009");
  //   $(".obrabotka_div").css("visibility", "hidden");
  // });
});
