$("#finish_button").click(function () {
  $(".menu_block").css({ "pointer-events": "all", opacity: "1" });
  $("#result").css({ display: "block", visibility: "visible" });
  $("#game").css({ display: "none", visibility: "hidden" });
  $("#screen_results").css({ display: "block", visibility: "visible" });
  if (correct_ans > 0) {
    $("#result_3").text(`${correct_ans}/2`);
    setTimeout(function () {
      typeWriter(result_1);
    }, 500);
    setTimeout(function () {
      typeWriter(result_2);
    }, 1000);
    setTimeout(function () {
      typeWriter(result_3);
    }, 2500);
    setTimeout(function () {
      typeWriter(result_4);
    }, 3000);
    setTimeout(function () {
      imageAppear(congrant_img);
    }, 4500);
    console.log(ans_1);
    console.log(ans_2);
  } else {
    $("#result_3").text(`${correct_ans}/2`);
    console.log(ans_1);
    console.log(ans_2);
    $("#result_1").text("КАКОЙ УЖАС!");
    $("#result_2").text("Обучение провалено");
    $("#congrant_img").attr("src", "images/sad_semmy.png");
    $("#congrant_img").css({ width: "26vw", margin: "3vh 0 0 30vw" });
    setTimeout(function () {
      typeWriter(result_1);
    }, 500);
    setTimeout(function () {
      typeWriter(result_2);
    }, 1000);
    setTimeout(function () {
      typeWriter(result_3);
    }, 2500);
    setTimeout(function () {
      typeWriter(result_4);
    }, 3000);
    setTimeout(function () {
      imageAppear(congrant_img);
    }, 4500);
  }
  $("#menu_block_errors").click(function () {
    $("#screen_results").css({ display: "none", visibility: "hidden" });
    $("#screen_errors").css({ display: "block", visibility: "visible" });
    $("#menu_block_errors").addClass("active");
    $("#menu_block_results").removeClass("active");
    $("#menu_block_errors").css("border-bottom", "6px solid #b8ec49");
  });
  $("#menu_block_results").click(function () {
    $("#screen_errors").css({ display: "none", visibility: "hidden" });
    $("#screen_results").css({ display: "block", visibility: "visible" });
    $("#menu_block_errors").removeClass("active");
    $("#menu_block_results").addClass("active");
  });
  // ЧТО?
  switch (ans_1) {
    case 0:
      if (ans_2 == 0) {
        $("#error_text_1").css("display", "block");
        $("#error_text_2").css("display", "block");
        console.log("0 0");
      } else if (ans_2 == 1) {
        $("#error_text_1").css("display", "block");
        console.log("0 1");
      }
      break;
    case 1:
      if (ans_2 == 0) {
        $("#error_text_2").css("display", "block");
        console.log("1 0");
      } else if (ans_2 == 1) {
        console.log("1 1");
        $("#error_text_0").css("display", "block");
      }
      break;
  }
});
