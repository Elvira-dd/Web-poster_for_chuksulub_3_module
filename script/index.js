//FIRST SCREEN WITH EDUCATION

// typeWriter(screen_naming_educ);
// setTimeout(() => {
//   typeWriter(screen_naming_educ_2);
// }, 500);
// setTimeout(() => {
//   typeWriter(screen_naming_educ_3);
// }, 1000);
// setTimeout(() => {
//   typeWriter(screen_educ_login_1);
// }, 1500);
// setTimeout(() => {
//   imageAppear(user_name);
// }, 2000);
// setTimeout(() => {
//   typeWriter(nextScreen_p);
// }, 3000);
// setTimeout(() => {
//   document.getElementById("nextScreen").style.visibility = "visible";
// }, 3000);

//SECOND SCREEN WITH EDUCATION
let correct_ans = 0;
let ans_1 = 0;
let ans_2 = 0;
$("#nextScreen").click(function () {
  screen_educ_login_1.style.visibility = "hidden";

  nextScreen.style.visibility = "hidden";
  nextScreen_p.style.visibility = "hidden";
  let userName = document.getElementById("user_name");
  user_name.style.visibility = "hidden";
  let screenEduc = document.getElementById("screen_educ");
  let userNameValue = userName.value;
  screenEduc.style.visibility = "hidden";
  screenEduc.style.position = "absolute";
  let output = "";
  if (userNameValue.length) {
    output = `<p id="elementEl" style="visibility:hidden";>Добро пожаловать, ${userNameValue}!
    Теперь это ваше рабочее место. Сегодня ваши задачи - пройти обучение, изучить механику работы и обработать 2 запроса с планет А-564 и О-009  
    </p>`;
  } else {
    output = `<p id="elementEl" style="visibility:hidden";>Добро пожаловать, человечек без имени!
     Теперь это ваше рабочее место. Сегодня ваши задачи - пройти обучение, изучить механику работы и обработать 2 запроса с планет А-564 и О-009 
    </p>`;
  }
  document.getElementById("second_educ_screen").innerHTML = output;
  typeWriter(elementEl);
  setTimeout(() => {
    typeWriter(screen_educ_text_1);
  }, 8000);
  setTimeout(() => {
    typeWriter(screen_educ_text_2);
  }, 10000);
  setTimeout(() => {
    document.getElementById("screen_educ_tip").style.visibility = "visible";
  }, 10500);
  setTimeout(() => {
    typeWriter(screen_educ_text_3);
  }, 12500);
  setTimeout(() => {
    document.getElementById("screen_educ_buttonYes").style.visibility =
      "visible";
  }, 13000);
  setTimeout(() => {
    typeWriter(screen_educ_buttonYes_p);
  }, 13000);
  setTimeout(() => {
    document.getElementById("screen_educ_buttonNo").style.visibility =
      "visible";
  }, 13500);
  setTimeout(() => {
    typeWriter(screen_educ_buttonNo_p);
  }, 13500);
});
function typeWriter(el) {
  el.style.visibility = "visible";
  const textArray = el.innerHTML.split("");
  el.innerHTML = "";
  textArray.forEach((letter, i) =>
    setTimeout(() => (el.innerHTML += letter), 50 * i)
  );
}

//THIRD SCREEN WITH EDUCATION | NO
$("#screen_educ_buttonNo").click(function () {
  document.getElementById("screen_educ_buttonNo").style.display = "none";
  document.getElementById("screen_educ_buttonYes").style.display = "none";
  document.getElementById("screen_educ_buttonNo_p_2").style.visibility =
    "visible";
  typeWriter(screen_educ_buttonNo_joke);
  setTimeout(() => {
    document.getElementById("screen_naming_educ").style.display = "none";
    document.getElementById("screen_naming_educ_2").style.display = "none";
    document.getElementById("screen_naming_educ_3").style.display = "none";
    document.getElementById("screen_educ_2").style.display = "none";
    document.getElementById("screen_educ_2").style.visibility = "hidden";
    typeWriter(fail_screen_joke_text_1);
  }, 9000);
  setTimeout(() => {
    typeWriter(fail_screen_joke_2);
  }, 9500);
  setTimeout(() => {
    typeWriter(fail_screen_joke_3);
  }, 10500);
  setTimeout(() => {
    typeWriter(fail_screen_joke_4);
  }, 11000);
  setTimeout(() => {
    imageAppear(fail_screen_joke_sad_semmy);
  }, 11000);
  setTimeout(function () {
    $("#message_reload").css("visibility", "visible");
    $("#fail_screen_joke").css("opacity", ".4");
    $(".menu_educ").css("opacity", ".4");
  }, 14000);
});
$("#message_reload").click(function () {
  location.reload();
});
function imageAppear(image) {
  image.style.visibility = "visible";
  setTimeout(() => {
    image.style.visibility = "hidden";
  }, 250);
  setTimeout(() => {
    image.style.visibility = "visible";
  }, 500);
  setTimeout(() => {
    image.style.visibility = "hidden";
  }, 1000);
  setTimeout(() => {
    image.style.visibility = "visible";
  }, 1500);
}

//THIRD SCREEN WITH EDUCATION | YES | LOADER

$("#screen_educ_buttonYes").click(function () {
  $(".screen").css("position", "absolute");
  $(".menu_game").css("visibility", "hidden");
  document.getElementById("screen_educ_buttonNo").style.display = "none";
  document.getElementById("screen_educ_buttonYes").style.display = "none";
  document.getElementById("screen_naming_educ").style.display = "none";
  document.getElementById("screen_naming_educ_2").style.display = "none";
  document.getElementById("screen_naming_educ_3").style.display = "none";
  document.getElementById("screen_educ_2").style.display = "none";
  document.getElementById("screen_educ_2").style.visibility = "hidden";
  document.getElementById("education_full").style.position = "absolute";
  $("#screen_naming_1_2").css("visibility", "hidden");
  imageAppear(semmy_loader);
  setTimeout(() => {
    document.getElementById("semmy_loader").src = "images/loading_semmy_2.png";
  }, 2000);
  setTimeout(() => {
    document.getElementById("semmy_loader").src =
      "images/loading_semmy_3_6.png";
  }, 3000);
  setTimeout(() => {
    document.getElementById("semmy_loader").src = "images/loading_semmy_4.png";
  }, 4000);
  setTimeout(() => {
    document.getElementById("semmy_loader").src = "images/loading_semmy_5.png";
  }, 5000);
  setTimeout(() => {
    document.getElementById("semmy_loader").src =
      "images/loading_semmy_3_6.png";
  }, 6000);
  setTimeout(() => {
    document.getElementById("semmy_loader").src = "images/loading_semmy_7.png";
  }, 7000);
  setTimeout(() => {
    document.getElementById("education").style.display = "none";
  }, 8000);
  setTimeout(() => {
    document.getElementById("education").style.position = "absolute";
  }, 8000);
  setTimeout(() => {
    $("#game").css("display", "block");
    $(".screen").css("position", "relative");
    $("#screen_naming_1_2").css("visibility", "visible");
    $(".menu_game").css("visibility", "visible");
    $("#education").css("display", "none");
    $("#education").css("visibility", "hidden");
  }, 8000);
});
