const form = document.querySelector(".js-form"),
    greeting = document.querySelector(".js-greeting"),
    input = form.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing"; //CN : className, LS : Local Storage

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function localName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user is not
        askForName();

    } else{
        // user is
        paintGreeting(currentUser);
    }
}

    
function init() {
  localName();
}

init();