const form = document.querySelector("form");
const taskList = document.querySelector("#task_list");


function addTask (task) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<input type ="checkbox" <span>${task}</span> <button>Delete</button>`;
    taskList.appendChild(listItem);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.querySelector("#task_input");
    const task = input.value;
    addTask(task);
    input.value = "";
});

taskList.addEventListener("click", (e) =>{
        if (e.target.tagName === "BUTTON"){
            const listItem = e.target.parentElement;
            taskList.removeChild(listItem);
        }
});