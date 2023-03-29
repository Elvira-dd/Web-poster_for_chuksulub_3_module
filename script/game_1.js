// УСЛОВИЯ
$("#screen_condition").click(function () {
  $("#screen_naming_2_1").css("visibility", "hidden");
  $("#screen_naming_2_1").css("position", "absolute");
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
  $("#screen_group").css("border-bottom", "3px solid #B8EC49");
  $("#screen_naming_2_3").css("position", "relative");
});

// ПЛАНЕТА
$("#screen_planet").click(function () {
  $("#screen_naming_2_1").css("visibility", "hidden");
  $("#screen_naming_2_1").css("position", "absolute");
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
  $("#screen_naming_2_1").css("visibility", "visible");
  $("#screen_naming_2_1").css("position", "relative");
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
  $("#group_screen_img").attr("src", "images/group_safety.png");
  $("#group_text_name_next").css("opacity", "1");
  $(".group_button").removeClass("active_group_div");
  $("#safety_group_button").addClass("active_group_div");
  $(".groups_buttons_selector").removeClass("active_selector");
  $("#groups_buttons_selector_1").addClass("active_selector");
  $("#groups_text").css("visibility", "visible");
  $("#boxes_text").css("visibility", "hidden");
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
  if ($("#group_text_name_next").css("opacity") == 1) {
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
  }
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
$("#tech_group_button").click(function () {
  $("#group_screen_img").attr("src", "images/group_safety.png");
  $(".group_button").removeClass("active_group_div");
  $("#tech_group_button").addClass("active_group_div");
  $(".groups_buttons_selector").removeClass("active_selector");
  $("#groups_buttons_selector_3").addClass("active_selector");
  $("#groups_text").css("visibility", "visible");
  $("#boxes_text").css("visibility", "hidden");
  $("#group_text_name").text("Техническая группа №А5");
  $("#group_main_text_1").text(
    `Состав: Регина (69_АО), Максим (000_АЛ), Рам (421_АЛ)
    `
  );
  $("#group_main_text_2").text(
    `Область работ: массовые сбои электричества, восстановление работы атомных станций `
  );
  $("#group_main_text_3").text(`Ближайшая свободная дата: 22.06.45`);
  $("#group_main_text_4").text(
    `Отчет последней операции: Восстановление работы атомного ледокола за 2 часа `
  );
  $("#group_text_name_next").css("opacity", ".4");
});
//Группа временной эвакуации
$("#evoq_group_button").click(function () {
  $("#group_screen_img").attr("src", "images/group_safety.png");
  $(".group_button").removeClass("active_group_div");
  $("#evoq_group_button").addClass("active_group_div");
  $(".groups_buttons_selector").removeClass("active_selector");
  $("#groups_buttons_selector_4").addClass("active_selector");
  $("#groups_text").css("visibility", "visible");
  $("#boxes_text").css("visibility", "hidden");
  $("#group_text_name").text("Группа временной эвакуации №44");
  $("#group_main_text_1").text(
    `Состав: Ливера(55_АЛ), Ричард(02_АО), Перер(991_АО), Екатерина (98_ЛЛ), 5 волонтеров`
  );
  $("#group_main_text_2").text(`Область работ: Планеты срочной помощи `);
  $("#group_main_text_3").text(`Ближайшая свободная дата: сегодня`);
  $("#group_main_text_4").text(
    `Отчет последней операции:
    Эвакуация 5000 жителей города Перор(планета Р-987) за 4 часа. Выживаемость граждан города 99% `
  );
  $("#group_text_name_next").css("opacity", ".4");
});
//ВЫБОР ГУМ,ПОМОЩИ
//Базовая
$("#gum_base_button").click(function () {
  $("#group_screen_img").attr("src", "images/boxes.png");
  $(".group_button").removeClass("active_group_div");
  $("#gum_base_button").addClass("active_group_div");
  $(".groups_buttons_selector").removeClass("active_selector");
  $("#groups_buttons_selector_5").addClass("active_selector");
  $("#groups_text").css("visibility", "hidden");
  $("#groups_text").css("position", "absolute");
  $("#boxes_text").css("visibility", "visible");
  $("#boxes_text_1").text("Базовая гуманитарная помощь");
  $("#boxes_text_3").text(
    `Состав: сухое горючее, спички, медицинские жгуты, марлевые бинты, йод, кровоостанавливающие, аспирин, влажные салфетки, термобелье, рюкзак, спальный мешок, быстрорастворимая каша, шоколад, консервы, сухофрукты, Фильтр для очистки воды`
  );
});
//Зимняя
$("#gum_winter_button").click(function () {
  $("#group_screen_img").attr("src", "images/boxes.png");
  $(".group_button").removeClass("active_group_div");
  $("#gum_winter_button").addClass("active_group_div");
  $(".groups_buttons_selector").removeClass("active_selector");
  $("#groups_buttons_selector_6").addClass("active_selector");
  $("#groups_text").css("visibility", "hidden");
  $("#groups_text").css("position", "absolute");
  $("#boxes_text").css("visibility", "visible");
  $("#boxes_text_1").text("Зимняя гуманитарная помощь");
  $("#boxes_text_3").text(
    `Состав: сухое горючее,дровяная микропечь, куртка, зимнии штаны, теплые ботинки,грелка для рук, спички, медицинские жгуты, марлевые бинты, йод, кровоостанавливающие, аспирин, влажные салфетки, термобелье, рюкзак, спальный мешок (выдержиающий до -30), быстрорастворимая каша, шоколад, консервы, сухофрукты, Фильтр для очистки воды`
  );
});
//Огнестойкая
$("#gum_fire_button").click(function () {
  $("#group_screen_img").attr("src", "images/boxes.png");
  $(".group_button").removeClass("active_group_div");
  $("#gum_fire_button").addClass("active_group_div");
  $(".groups_buttons_selector").removeClass("active_selector");
  $("#groups_buttons_selector_7").addClass("active_selector");
  $("#groups_text").css("visibility", "hidden");
  $("#groups_text").css("position", "absolute");
  $("#boxes_text").css("visibility", "visible");
  $("#boxes_text_1").text("Огнестойкая гуманитарная помощь");

  $("#boxes_text_3").text(
    `Состав: сухое горючее,спички, медицинские жгуты, марлевые бинты, йод, кровоостанавливающие, аспирин, влажные салфетки, рюкзак, спальный мешок с охлаждением, быстрорастворимая каша, шоколад, консервы, сухофрукты, фильтр для очистки воды, системы охлаждения воды, тканевый тент для создания totalblack тени, охлаждающие подушки, ледяные вентиляторы`
  );
});
// Переход на следующий уровень
//Гуманитарная помощь
$(".resque_button_next").click(function () {
  obrabotka();
  setTimeout(function () {
    $("#obrabotka_button").css("visibility", "visible");
  }, 4000);
  $("#screen_naming_2_3").css({
    visibility: "hidden",
    display: "none",
  });
  $(".second_part_screen").css({
    visibility: "hidden",
    display: "none",
  });
  $("#obrabotka").css({
    display: "flex",
  });
  $(".menu_block").css("pointer-events", "none");
  $(".menu_block").css("opacity", ".4");
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
});
$("#resque_button_help_usuall").click(function () {
  $("#gum_base_count").text("х6");
});
$("#resque_button_help_winter").click(function () {
  $("#gum_winter_count").text("х1");
  correct_ans = 1;
  ans_1 = 1;
});
$("#resque_button_help_hot").click(function () {
  $("#gum_fire_count").text("х2");
});
//
$("#resque_button_help_return").click(function () {
  obrabotka();
  setTimeout(function () {
    $("#obrabotka_button").css("visibility", "visible");
  }, 4000);
  $("#screen_naming_2_3").css({
    visibility: "hidden",
    display: "none",
  });
  $(".second_part_screen").css({
    visibility: "hidden",
    display: "none",
  });
  $("#obrabotka").css({
    display: "flex",
  });
  $("#obrabotka_text_1").text(
    "Запрос перенаправлен в основной административный центр"
  );
  $(".menu_block").css("pointer-events", "none");
  $(".menu_block").css("opacity", ".4");
  $(".obrabotka_div").css("visibility", "hidden");
});
//
$("#resque_button_help_cancel").click(function () {
  obrabotka();
  setTimeout(function () {
    $("#obrabotka_button").css("visibility", "visible");
  }, 4000);
  $("#screen_naming_2_3").css({
    visibility: "hidden",
    display: "none",
  });
  $(".second_part_screen").css({
    visibility: "hidden",
    display: "none",
  });
  $("#obrabotka").css({
    display: "flex",
  });
  $("#obrabotka_text_1").text(
    "В запросе отказано.  Каждый отклоненный запрос в конце рабочего необходимо письмено объяснить. Если вы отказали случайно, обратитесь к администратору "
  );
  $(".menu_block").css("pointer-events", "none");
  $(".menu_block").css("opacity", ".4");
  $(".obrabotka_div").css("visibility", "hidden");
});

function obrabotka() {
  $("#screen_naming_1_2").text("ОБРАБОТКА");
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА.");
  }, 500);
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА..");
  }, 1000);
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА...");
  }, 1500);
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА");
  }, 2000);
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА.");
  }, 2500);
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА..");
  }, 3000);
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА...");
  }, 3500);
  setTimeout(function () {
    $("#screen_naming_1_2").text("ОБРАБОТКА ЗАВЕРШЕНА");
  }, 4000);
}
