// УСЛОВИЯ
$("#screen_condition").click(function () {
  $("#screen_planet").removeClass("active");
  $("#screen_resque").removeClass("active");
  $("#screen_group").removeClass("active");
  $("#screen_condition").addClass("active");
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
  $("#screen_group").css("border-bottom", "3px solid #B8EC49");
});

// ЗАПРОС
$("#screen_resque").click(function () {
  $("#screen_planet").removeClass("active");
  $("#screen_condition").removeClass("active");
  $("#screen_group").removeClass("active");
  $("#screen_resque").addClass("active");
  $("#screen_condition").css("border-top", "3px solid #B8EC49");
  $("#screen_naming_2_3").css("position", "absolute");
  $("#screen_naming_1_2").text("ЗАДАЧА №1");
  $("#screen_naming_2_3").text("ГУМАНИТАРНАЯ ПОМОЩЬ");
  $("#resque_screen").css({
    display: "block",
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
  $("#screen_group").css("border-bottom", "3px solid #B8EC49");
  $("#screen_naming_2_3").css("position", "relative");
});

// ПЛАНЕТА
$("#screen_planet").click(function () {
  $("#screen_resque").removeClass("active");
  $("#screen_condition").removeClass("active");
  $("#screen_group").removeClass("active");
  $("#screen_planet").addClass("active");
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
});

// ГРУППЫ
$("#screen_group").click(function () {
  $("#screen_resque").removeClass("active");
  $("#screen_condition").removeClass("active");
  $("#screen_planet").removeClass("active");
  $("#screen_group").addClass("active");
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
});
// ВЫБОР ГРУППЫ
// Группы спасения
$("#safety_group_button").click(function () {
  $(".group_button").removeClass(".active_group_div");
  $("#safety_group_button").addClass("active_group_div");
  $("#groups_buttons_selector_1").addClass("active_selector");
  $("#groups_text").css("visibility", "visible");
  $("#group_text_name").text("Группа спасения №56");
  $("#group_main_text_1").text(
    `Состав: Анджена (678_АЛ),Верон (8009_АН),Принал (453_АП),Ян (7764_АА)`
  );
  $("#group_main_text_2").text(
    `Область работ: планеты с низкими температурами, ураганами, песчаными бурями; помощь в строительстве подземных жилых комплексов`
  );
  $("#group_main_text_3").text(`Ближайшая свободная дата: 27.06.45`);
  $("#group_main_text_4").text(
    `Отчет последней операции:Вывезено 89 человек из воздушного саркофага №8 на планете О-98 во время песчаного урагана 11 баллов. `
  );
});
//Выбор группа спасение
$("#group_text_name_next").click(function () {
  $("#group_text_name_prev").css("opacity", "1");
  $("#group_text_name_next").css("opacity", ".4");
  $("#group_text_name").text(`Группа спасения №99`);
  $("#group_main_text_1").text(`Состав: Лидия(6098_АЛ),Александр (8029_АО),
    Рюк(4973_АЛ),Озвольд (823_АО), котик Искорка (002_АК)
    `);
  $("#group_main_text_2").text(
    `Область работ: экстренные ситуации с землетрясениями, разгребание завалов с поиском людей `
  );
  $("#group_main_text_3").text(`Ближайшая свободная дата: 20.06.45 `);
  $("#group_main_text_4").text(`Отчет последней операции:
    Найдено 12 человек с помощью разведывательного котика после 8 бального землетрясения
    `);
});
$("#group_text_name_prev").click(function () {
  if ($("#group_text_name_prev").css("opacity") == 1) {
    $("#group_text_name").text("Группа спасения №56");
    $("#group_main_text_1").text(
      `Состав: Анджена (678_АЛ),Верон (8009_АН),Принал (453_АП),Ян (7764_АА)`
    );
    $("#group_main_text_2").text(
      `Область работ: планеты с низкими температурами, ураганами, песчаными бурями; помощь в строительстве подземных жилых комплексов`
    );
    $("#group_main_text_3").text(`Ближайшая свободная дата: 27.06.45`);
    $("#group_main_text_4").text(
      `Отчет последней операции:Вывезено 89 человек из воздушного саркофага №8 на планете О-98 во время песчаного урагана 11 баллов. `
    );
    $("#group_text_name_prev").css("opacity", ".4");
    $("#group_text_name_next").css("opacity", "1");
  }
});
//Техническая группа

//Группа временной эвакуации

//ВЫБОР ГУМ,ПОМОЩИ
//Базовая
$("#gum_group_button");
//Зимняя

//Огнестойкая
