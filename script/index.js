$("#nextScreen").click(function(){
  let userName = document.getElementById("user_name")
  let screenEduc = document.getElementById("screen_educ")
  let userNameValue = userName.value
  if(userNameValue.length) {
    screenEduc.style.visibility = "hidden"
    screenEduc.style.position = "absolute"
    console.log("Hide")
    typeWriter(elementEl)
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
      setTimeout(() => (el.innerHTML += letter), 95 * i)
  );
}
