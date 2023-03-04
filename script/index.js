typeWriter(screen_naming_educ)
setTimeout( () => {typeWriter(screen_naming_educ_2)}, 1000)
setTimeout( () => {typeWriter(screen_naming_educ_3)}, 2500)
setTimeout( () => {typeWriter(screen_educ_login_1)}, 3500)
setTimeout( () => {document.getElementById("user_name").style.visibility="visible"}, 4500)
setTimeout(() =>{typeWriter(nextScreen_p)},5500)
setTimeout( () => {document.getElementById("nextScreen").style.visibility="visible"}, 5500)


$("#nextScreen").click(function(){
  screen_educ_login_1.style.visibility = "hidden"
  user_name.style.visibility = "hidden"
  nextScreen.style.visibility = "hidden"
  let userName = document.getElementById("user_name")
  let screenEduc = document.getElementById("screen_educ")
  let userNameValue = userName.value
  if(userNameValue.length) {
    screenEduc.style.visibility = "hidden"
    screenEduc.style.position = "absolute"
    console.log("Hide")
    let output = ""
    output = `<p id="elementEl" style="visibility:hidden";>Добро пожаловать, ${userNameValue}!
     Теперь это ваше рабочее место. Сегодня ваша задача - пройти обучение и изучить механику работы>. 
    </p>`;
    document.getElementById("second_educ_screen").innerHTML = output;
    typeWriter(elementEl)
    const elementPs = window.getComputedStyle(elementEl,"::after")
    setTimeout(()=> {elementPs.getPropertyValue("display")="none"}, 7000)
    setTimeout( () => {typeWriter(screen_educ_text_1)}, 12000)
    setTimeout( () => {typeWriter(screen_educ_text_2)}, 15500)
  }
  else {
    // supportSemmiNaming
    console.log("Input is empty")

  }
  })

function supportSemmiNaming() {
  console.log("help")
}
function typeWriter(el) {
  el.style.visibility = "visible"
  const textArray = el.innerHTML.split('');
  el.innerHTML = '';
  textArray.forEach((letter, i) =>
      setTimeout(() => (el.innerHTML += letter), 60 * i)
  );
}
