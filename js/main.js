let taskinput = document.getElementById("taskinput");
let span = document.querySelector("span");
let addtaskbtn = document.getElementById("addtask-btn");
let deleteAll = document.getElementById("deleteAll");
let alltasks = document.getElementById("alltasks");
let emptytask = document.getElementById("emptytask");
let dark = document.getElementById("dark");
let body = document.querySelector("body");
let h1 = document.getElementById("h1-title");
let layout = document.querySelector(".layout"); 
let closemodal = document.querySelector("#closemodal");
let confirmdelete = document.querySelector("#confirmdelete");
let icondelete = document.querySelector("#icondelete");
let count = document.querySelector(".count");

let addtask=() => {
   let taskvalue = taskinput.value;
   if (taskvalue.trim()== ""){
    span.classList.remove("none");
    taskinput.classList.add("invalid");
   } 
   else if (taskvalue.length<3){
   span.classList.remove("none");
   span.innerHTML=" you must enter At Least 3 character";
   taskinput.value =" ";
} 
   else if(taskvalue.length>20){
    span.classList.remove("none");
    span.innerHTML=" you must enter At Most 20 Character";
    taskinput.value =" ";
   }else{
    span.classList.add("none");
    taskinput.classList.remove("invalid");

    const alertClasses = ['alert-primary', 'alert-secondary', 'alert-success', 'alert-danger', 'alert-warning', 'alert-info', 'alert-light', 'alert-dark'];
  const randomIndex = Math.floor(Math.random() * alertClasses.length);
    alltasks.innerHTML+= ` <div class="alert task ${alertClasses[randomIndex]}"> ${taskvalue}
    <i class="delete float-end fa-solid fa-trash"></i> </div>`;
    updateCounts();
    taskinput.value =" "; 
    checkemptytasks();
    Empty2();
  
   } 
  
}
addtaskbtn.addEventListener("click",addtask) ;

dark.style.background= "rgb(191, 138, 240)";
dark.onclick=function(){
    if(dark.style.background== "rgb(191, 138, 240)"){
       dark.innerHTML=`<i class="fa-solid fa-sun"></i> Light Mode`;
        dark.style.background="rgb(218, 199, 233)";
        body.style.background= "rgb(33, 33, 36)";
        h1.style.color="rgb(173, 216, 230)";
    }
    else{
        dark.innerHTML=`<i class= " fa-regular fa-moon"></i> Dark Mode `;
        dark.style.background="rgb(191, 138, 240)";
        body.style.background="rgb(243, 217, 247)"; 
        h1.style.color="rgb(191, 138, 240)";
    }
}

document.addEventListener("click", function(event){
    if (event.target.classList.contains("delete")){
       event.target.parentElement.remove();
       checkemptytasks();
       
    }
});

let checkemptytasks =() =>{
    if(alltasks.children.length==0){
        emptytask.classList.remove("none");
        count.classList.add("d-none");
        deleteAll.classList.add("none");
    } else{
        emptytask.classList.add("none");
        count.classList.remove("d-none"); 
        deleteAll.classList.remove("none");
        updateCounts();
        
    }
}
/*let deletefun =() => {
    alltasks.innerHTML= "";
    checkemptytasks();
}

 deleteAll.addEventListener("click", deletefun) */
     
 /*document.addEventListener("click",function(event){
    if(event.target.classList.contains('task')){
       event.target.classList.toggle("checked");
    }
 })*/

 //let showmodal =() =>{
   // layout.classList.toggle("none");
 //}

 deleteAll.addEventListener("click",function(){
    layout.style.display="block";
 });

 confirmdelete.addEventListener("click",function(){
    alltasks.innerHTML= "";
    layout.style.display="none";
    deleteAll.classList.add("none");
    checkemptytasks();
 })

 closemodal.addEventListener("click",function(){
    layout.style.display="none";
 })

 icondelete.addEventListener("click",function(){
    layout.style.display="none";
 })


 document.addEventListener('click',function(event){
    if(event.target.classList.contains('task')){
      event.target.classList.toggle('checked');
      checkemptytasks();
       updateCounts();
    }
  }); 
  
  document.addEventListener('click', function(event) {
  if (event.target.classList.contains('task')) {
    event.target.classList.toggle('selected'); 
    updateCounts(); 
  }
  }); 
  
  
  function updateCounts() {
    const allTasks = document.querySelectorAll('.task');
    const selectedTasks = document.querySelectorAll('.task.selected');
  
    const selectedCount = selectedTasks.length;
    const pendingCount = allTasks.length - selectedCount;
  
    document.querySelector('.count .selected').textContent = `Selected: ${selectedCount}`;
    document.querySelector('.count .pending').textContent = `Pending: ${pendingCount}`;
  }
  
  updateCounts();
  
  function Empty2() {
    if (document.querySelectorAll('.task').length === 0) {
      document.querySelector('.count .selected').textContent = 'Selected: 0';
      document.querySelector('.count .pending').textContent = 'Pending: 0';
    }
  }