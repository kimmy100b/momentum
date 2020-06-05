const toDoForm = document.querySelector(".js-toDoForm"),
 toDoInput = toDoForm.querySelector("input"),
 toDoList = document.querySelector(".js-toDoList");

 const TODOS_LS = 'toDos'; //변수 loadToDos 안에 있는 변수 toDos를 부르기 위해 만든 변수

 const toDos = [];

function saveToDos(){ //toDos를 가져와서 로컬에 저장하는 일
   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

}

 function paintToDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span = document.createElement("span");
   const newId = toDos.length+1;
   
   delBtn.innerText = "X";
   span.innerText = text;
   li.appendChild(span);
   li.appendChild(delBtn);
   toDoList.appendChild(li);
   li.id = newId;

   const toDoObj = {
      text : text,
      id : newId
   };

   toDos.push(toDoObj);
   saveToDos();
 }

 function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
 }

 function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
    
    } 
 }

 function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
 }

 init();