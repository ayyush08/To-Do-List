let taskCount = 0;
function addedTask(){
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();
    if(task === ""){
        alert('Please enter a valid task');
    }else{
        taskCount++;
        let html = `<div class="task">
        <span>
            <label class="custom-checkbox">
                <input type="checkbox" hidden />
                <span class="checkmark"></span>
                <p class="addedtask ${taskCount}">${task}</p>
                </label></span>
        <button class="delete">Delete</button>
        </div>`
        taskInput.value = "";
        return html;
}
return '';
}

const addButton = document.querySelector(".addButton");
var added = document.querySelector(".added")
addButton.addEventListener("click",function(){
    let newTask = addedTask();
    if(newTask !== '') {
    added.innerHTML = added.innerHTML+newTask;
};
});


let check = document.querySelector(".tasks");
check.addEventListener("click",function(e){
    if(e.target.classList.contains("checkmark")){
        let taskText = e.target.nextElementSibling;
        if(taskText){
            taskText.classList.toggle("taskText");
        }
    }
    if(e.target.classList.contains("delete")){
        e.target.parentNode.remove();
    }
});






