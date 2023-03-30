let GetWidth = $(window).width();
if (GetWidth < 740) {
  $("#screen_educ_buttonNo").click(function () {
    console.log(GetWidth);
    $("#second_educ_2").css("display", "none");
    $("#screen_educ_text_1").css("display", "none");
    $("#screen_educ_text_2").css("display", "none");
    $("#screen_educ_tip").css("display", "none");
    $("#elementEl").css("display", "none");
    $(".screen_naming_in_educ").css("margin-bottom", "0px");
    setTimeout(function () {
      $(".screen_naming_in_educ").css("margin-bottom", "45px");
    }, 10000);
    $(".screen").css("padding", "3vh 5vw 5vh 5vw");
  });
  $(".menu_game").css({ display: "none", position: "absolute" });
  $(".menu_game_adaptive").css({ display: "block" });
}
