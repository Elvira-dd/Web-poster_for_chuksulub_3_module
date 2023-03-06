//FIRST SCREEN WITH EDUCATION

typeWriter(screen_naming_educ)
setTimeout( () => {typeWriter(screen_naming_educ_2)}, 1000)
setTimeout( () => {typeWriter(screen_naming_educ_3)}, 2500)
setTimeout( () => {typeWriter(screen_educ_login_1)}, 3500)
setTimeout( () => {imageAppear(user_name)}, 4500)
setTimeout(() =>{typeWriter(nextScreen_p)},5500)
setTimeout( () => {document.getElementById("nextScreen").style.visibility="visible"}, 5500)

//SECOND SCREEN WITH EDUCATION

$("#nextScreen").click(function(){
  screen_educ_login_1.style.visibility = "hidden"
  user_name.style.visibility = "hidden"
  nextScreen.style.visibility = "hidden"
  nextScreen_p.style.visibility = "hidden"
  let userName = document.getElementById("user_name")
  let screenEduc = document.getElementById("screen_educ")
  let userNameValue = userName.value
    screenEduc.style.visibility = "hidden"
    screenEduc.style.position = "absolute"
    let output = ""
    if(userNameValue.length) {
    output = `<p id="elementEl" style="visibility:hidden";>Добро пожаловать, ${userNameValue}!
     Теперь это ваше рабочее место. Сегодня ваша задача - пройти обучения, изучить механику работы и обработать 3 запроса с планет А-564, З-98 и О-09 
    </p>`;  }
  else {
    output = `<p id="elementEl" style="visibility:hidden";>Добро пожаловать, человечек без имени!
     Теперь это ваше рабочее место. Сегодня ваша задача - пройти обучения, изучить механику работы и обработать 3 запроса с планет А-564, З-98 и О-09 
    </p>`; 
  }
    document.getElementById("second_educ_screen").innerHTML = output;
    typeWriter(elementEl)
    setTimeout( () => {typeWriter(screen_educ_text_1)}, 11000)
    setTimeout( () => {typeWriter(screen_educ_text_2)}, 13000)
    setTimeout( () => {document.getElementById("screen_educ_tip").style.visibility="visible"}, 13000)
    setTimeout( () => {typeWriter(screen_educ_text_3)}, 14500)
    setTimeout( () => {document.getElementById("screen_educ_buttonYes").style.visibility="visible"}, 15500)
    setTimeout( () => {typeWriter(screen_educ_buttonYes_p)}, 15500)
    setTimeout( () => {document.getElementById("screen_educ_buttonNo").style.visibility="visible"}, 16000)
    setTimeout( () => {typeWriter(screen_educ_buttonNo_p)}, 16000)

  })
function typeWriter(el) {
  el.style.visibility = "visible"
  const textArray = el.innerHTML.split('');
  el.innerHTML = '';
  textArray.forEach((letter, i) =>
      setTimeout(() => (el.innerHTML += letter), 60 * i)
  );
}

//THIRD SCREEN WITH EDUCATION | NO
$("#screen_educ_buttonNo").click(function(){
  document.getElementById("screen_educ_buttonNo").style.display = "none"
  document.getElementById("screen_educ_buttonYes").style.display = "none"
  document.getElementById("screen_educ_buttonNo_p_2").style.visibility = "visible"
  typeWriter(screen_educ_buttonNo_joke)
  setTimeout(() => {
    document.getElementById("screen_naming_educ").style.display="none"
    document.getElementById("screen_naming_educ_2").style.display="none"
    document.getElementById("screen_naming_educ_3").style.display="none"
    document.getElementById("screen_educ_2").style.display="none"
    document.getElementById("screen_educ_2").style.visibility="hidden"
    typeWriter(fail_screen_joke_text_1)
  },9000)
  setTimeout(() => {
    typeWriter(fail_screen_joke_2)
  },9500)
  setTimeout(() => {typeWriter(fail_screen_joke_3)},10500)
  setTimeout(() => {typeWriter(fail_screen_joke_4)},11000)
  setTimeout(() => {imageAppear(fail_screen_joke_sad_semmy)},11000)
})

function imageAppear(image) {
  image.style.visibility="visible"
  setTimeout(() => { image.style.visibility="hidden" },250)
  setTimeout(() => { image.style.visibility="visible" },500)
  setTimeout(() => { image.style.visibility="hidden" },1000)
  setTimeout(() => { image.style.visibility="visible" },1500)
}

//THIRD SCREEN WITH EDUCATION | YES | LOADER




