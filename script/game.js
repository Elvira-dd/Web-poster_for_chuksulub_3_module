// УСЛОВИЯ
$("#screen_condition").click(function(){
    $("#screen_planet").removeClass("active")
    $("#screen_resque").removeClass("active")
    $("#screen_group").removeClass("active")
    $("#screen_condition").addClass("active")
    $("#screen_condition").css("border-top","0px")
    $("#screen_naming_1_2").text("УСЛОВИЯ ОТПРАВКИ")
    $("#screen_naming_2_3").text("КОМАНД И ГУМАНИТАРНОЙ ПОМОЩИ")
    $("#screen_naming_2_3").css("position", "relative")
    $("#condition_screen").css({"display":"flex", "position":"relative", "visibility":"visible"})
    $("#resque_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#planet_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#group_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#screen_group").css("border-bottom","3px solid #B8EC49")
})


// ЗАПРОС
$("#screen_resque").click(function(){
    $("#screen_planet").removeClass("active")
    $("#screen_condition").removeClass("active")
    $("#screen_group").removeClass("active")
    $("#screen_resque").addClass("active")
    $("#screen_condition").css("border-top","3px solid #B8EC49")
    $("#screen_naming_2_3").css("position", "absolute")
    $("#screen_naming_1_2").text("ЗАДАЧА №1")
    $("#screen_naming_2_3").text("ГУМАНИТАРНАЯ ПОМОЩЬ")
    $("#resque_screen").css({"display":"block", "position":"relative", "visibility":"visible"})
    $("#condition_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#planet_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#group_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#screen_group").css("border-bottom","3px solid #B8EC49")
    $("#screen_naming_2_3").css("position", "relative")
})


// ПЛАНЕТА
$("#screen_planet").click(function(){
    $("#screen_resque").removeClass("active")
    $("#screen_condition").removeClass("active")
    $("#screen_group").removeClass("active")
    $("#screen_planet").addClass("active")
    $("#screen_condition").css("border-top","3px solid #B8EC49")
    $("#screen_naming_1_2").text("О ПЛАНЕТЕ")
    $("#screen_naming_2_3").text("")
    $("#screen_naming_2_3").css("position", "absolute")
    $("#planet_screen").css({"display":"block", "position":"relative", "visibility":"visible"})
    $("#condition_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#resque_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#group_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#screen_group").css("border-bottom","3px solid #B8EC49")
    
})


// ГРУППЫ
$("#screen_group").click(function(){
    $("#screen_resque").removeClass("active")
    $("#screen_condition").removeClass("active")
    $("#screen_planet").removeClass("active")
    $("#screen_group").addClass("active")
    $("#screen_condition").css("border-top","3px solid #B8EC49")
    $("#screen_group").css("border-bottom","0px")
    $("#screen_naming_1_2").text("ГРУППЫ И ГУМ.ПОМОЩЬ")
    $("#screen_naming_2_3").text("")
    $("#screen_naming_2_3").css("position", "absolute")
    $("#screen_naming_2_1").text("ДОСТУПНЫЕ")
    $("#screen_naming_2_1").css("text-align","center")
    $("#group_screen").css({"display":"block", "position":"relative", "visibility":"visible"})
    $("#condition_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#resque_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
    $("#planet_screen").css({"display":"none", "position":"absolute", "visibility":"hidden"})
})