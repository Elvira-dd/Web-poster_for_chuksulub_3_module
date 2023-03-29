$("#resque_screen_tip_1").click(function () {
  $("#resque_screen_tip_box_1").css("visibility", "visible");
  $(".hidden_tool").each(function () {
    if ($(this).hasClass("tooltip_1")) {
      $(this).css("opacity", "1");
    } else {
      $(this).css("opacity", ".4");
    }
  });
  $(".menu_block").css("pointer-events", "none");
});
$(".closing_tip").click(function () {
  $(".tip_boxes").css("visibility", "hidden");
  $(".hidden_tool").each(function () {
    $(this).css("opacity", "1");
  });
  $(".menu_block").css("pointer-events", "visible");
});
$("#resque_screen_tip_2").click(function () {
  $("#resque_screen_tip_box_2").css("visibility", "visible");
  $(".hidden_tool").each(function () {
    if ($(this).hasClass("tooltip_2")) {
      $(this).css("opacity", "1");
    } else {
      $(this).css("opacity", ".4");
    }
  });
  $(".menu_block").css("pointer-events", "none");
});
$("#planet_screen_tip_1").click(function () {
  $("#planet_screen_tip_box_1").css("visibility", "visible");
  $(".hidden_tool").each(function () {
    if ($(this).hasClass("tooltip_1_1")) {
      $(this).css("opacity", "1");
    } else {
      $(this).css("opacity", ".4");
    }
  });
  $(".menu_block").css("pointer-events", "none");
});
$("#group_screen_tip_1").click(function () {
  $("#group_screen_tip_box_1").css("visibility", "visible");
  $(".hidden_tool").each(function () {
    if ($(this).hasClass("tooltip_1_1")) {
      $(this).css("opacity", "1");
    } else {
      $(this).css("opacity", ".4");
    }
  });
  $(".menu_block").css("pointer-events", "none");
});
$("#condition_screen_tip_1").click(function () {
  $("#condition_screen_tip_box_1").css("visibility", "visible");
  $(".hidden_tool").each(function () {
    if ($(this).hasClass("tooltip_1_1")) {
      $(this).css("opacity", "1");
    } else {
      $(this).css("opacity", ".4");
    }
  });
  $(".menu_block").css("pointer-events", "none");
});
