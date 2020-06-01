const form = document.querySelector(".js-form"),
    greeting = document.querySelector(".js-greeing"),
    input = form.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function localName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user is not


    } else{
        // user is
        paintGreeting(currentUser);
    }
}

    
function init() {
  

}

init();