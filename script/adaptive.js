let GetWidth = $(window).width();
let ad_count = 2;
if (GetWidth < 740) {
  $("#screen_educ_buttonNo").click(function () {
    $("#second_educ_2").css("display", "none");
    $("#screen_educ_text_1").css("display", "none");
    $("#screen_educ_text_2").css("display", "none");
    $("#screen_educ_tip").css("display", "none");
    $("#elementEl").css("display", "none");
    $(".screen_naming_in_educ").css("margin-bottom", "0px");
    setTimeout(function () {
      $(".screen_naming_in_educ").css("margin-bottom", "45px");
    }, 10000);
  });
  $(".menu_game").css({ display: "none", position: "absolute" });
  $(".menu_game_adaptive").css({ display: "block" });
}
$("#left_arrow_ad").click(function () {
  switch (ad_count) {
    case 2:
      ad_count -= 1;
      $("#left_arrow_ad").css("opacity", ".4");
      $("#ad_menu_text").text("УСЛОВИЯ");
      $("#screen_naming_2_1").css("visibility", "hidden");
      $("#screen_naming_2_1").css("position", "absolute");
      $("#screen_condition").css("border-top", "0px");
      $("#screen_naming_1_2").text("УСЛОВИЯ ОТПРАВКИ");
      $("#screen_naming_2_3").text("КОМАНД И ГУМАНИТАРНОЙ ПОМОЩИ");
      $("#screen_naming_2_3").css("position", "relative");
      $("#condition_screen").css({
        display: "flex",
        position: "relative",
        visibility: "visible",
      });
      $("#resque_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#planet_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#group_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });

      break;
    case 3:
      ad_count -= 1;
      $("#left_arrow_ad").css("opacity", "1");
      $("#ad_menu_text").text("ЗАПРОС");
      $("#screen_naming_2_1").css("visibility", "hidden");
      $("#screen_naming_2_1").css("position", "absolute");
      $("#screen_planet").removeClass("active");
      $("#screen_condition").removeClass("active");
      $("#screen_group").removeClass("active");
      $("#screen_resque").addClass("active");
      $("#screen_condition").css("border-top", "3px solid #B8EC49");
      $("#screen_naming_2_3").css("position", "absolute");
      $("#screen_naming_1_2").text("ЗАПРОС №1");
      $("#screen_naming_2_3").text("ГУМАНИТАРНАЯ ПОМОЩЬ");
      $("#resque_screen").css({
        display: "flex",
        position: "relative",
        visibility: "visible",
      });
      $("#condition_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#planet_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#group_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#screen_naming_2_3").css("position", "relative");

      break;
    case 4:
      ad_count -= 1;
      $("#right_arrow_ad").css("opacity", "1");
      $("#screen_naming_2_1").css("visibility", "hidden");
      $("#ad_menu_text").text("ПЛАНЕТА");
      $("#screen_naming_2_1").css("position", "absolute");
      $("#screen_condition").css("border-top", "3px solid #B8EC49");
      $("#screen_naming_1_2").text("О ПЛАНЕТЕ");
      $("#screen_naming_2_3").text("");
      $("#screen_naming_2_3").css("position", "absolute");
      $("#planet_screen").css({
        display: "block",
        position: "relative",
        visibility: "visible",
      });
      $("#condition_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#resque_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#group_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#screen_group").css("border-bottom", "3px solid #B8EC49");
      break;
  }
});
$("#right_arrow_ad").click(function () {
  switch (ad_count) {
    case 1:
      ad_count += 1;

      $("#left_arrow_ad").css("opacity", "1");
      $("#ad_menu_text").text("ЗАПРОС");
      $("#screen_naming_2_1").css("visibility", "hidden");
      $("#screen_naming_2_1").css("position", "absolute");
      $("#screen_planet").removeClass("active");
      $("#screen_condition").removeClass("active");
      $("#screen_group").removeClass("active");
      $("#screen_resque").addClass("active");
      $("#screen_condition").css("border-top", "3px solid #B8EC49");
      $("#screen_naming_2_3").css("position", "absolute");
      $("#screen_naming_1_2").text("ЗАПРОС №1");
      $("#screen_naming_2_3").text("ГУМАНИТАРНАЯ ПОМОЩЬ");
      $("#resque_screen").css({
        display: "flex",
        position: "relative",
        visibility: "visible",
      });
      $("#condition_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#planet_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#group_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#screen_naming_2_3").css("position", "relative");

      break;
    case 2:
      ad_count += 1;
      $("#screen_naming_2_1").css("visibility", "hidden");
      $("#ad_menu_text").text("ПЛАНЕТА");
      $("#screen_naming_2_1").css("position", "absolute");
      $("#screen_condition").css("border-top", "3px solid #B8EC49");
      $("#screen_naming_1_2").text("О ПЛАНЕТЕ");
      $("#screen_naming_2_3").text("");
      $("#screen_naming_2_3").css("position", "absolute");
      $("#planet_screen").css({
        display: "block",
        position: "relative",
        visibility: "visible",
      });
      $("#condition_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#resque_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#group_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#screen_group").css("border-bottom", "3px solid #B8EC49");

      break;
    case 3:
      ad_count += 1;
      $("#screen_naming_2_1").css("visibility", "visible");
      $("#right_arrow_ad").css("opacity", ".4");
      $("#screen_naming_2_1").css("position", "relative");
      $("#ad_menu_text").text("ГРУППЫ");
      $("#screen_condition").css("border-top", "3px solid #B8EC49");
      $("#screen_group").css("border-bottom", "0px");
      $("#screen_naming_1_2").text("ГРУППЫ И ГУМ.ПОМОЩЬ");
      $("#screen_naming_2_3").text("");
      $("#screen_naming_2_3").css("position", "absolute");
      $("#screen_naming_2_1").text("ДОСТУПНЫЕ");
      $("#screen_naming_2_1").css("text-align", "center");
      $("#group_screen").css({
        display: "block",
        position: "relative",
        visibility: "visible",
      });
      $("#condition_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#resque_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });
      $("#planet_screen").css({
        display: "none",
        position: "absolute",
        visibility: "hidden",
      });

      break;
  }
});
