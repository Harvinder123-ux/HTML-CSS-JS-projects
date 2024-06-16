// let taskInput = document.querySelector("#task-input");
// let taskBtn = document.querySelector("#taskBtn");
// let container = document.querySelector("#task-list-container");
// let RemoveBtn = document.querySelector("#RemoveBtn");
// let taskList = document.querySelector("#task-list");


// taskBtn.addEventListener("click", () => {
//     let listMsg = taskInput.value;
//     let list = document.createElement("li");
//     list.innerText = listMsg;
//     container.appendChild(list);
//     console.log(list);

//     RemoveBtn.addEventListener("click", () => {
//         container.removeChild(list);
//     })

// })

let taskInput = document.querySelector("#task-input");
let taskBtn = document.querySelector("#taskBtn");
let container = document.querySelector("#task-list-container");
let removeBtn = document.querySelector("#removeBtn"); // Corrected the ID
let taskList = document.querySelector("#task-list");

taskBtn.addEventListener("click", () => {
    let listMsg = taskInput.value;
    if (listMsg.trim() !== '') { // Check if the input is not empty or whitespace
        let list = document.createElement("li");
        list.innerText = listMsg;
        taskList.appendChild(list);

        // Add a "Remove" button for each task
        let removeTaskBtn = document.createElement("button");
        removeTaskBtn.innerText = "Remove";
        removeTaskBtn.addEventListener("click", () => {
            taskList.removeChild(list);
        });

        list.appendChild(removeTaskBtn);

        taskInput.value = ''; // Clear the input field after adding a task
    }
});

removeBtn.addEventListener("click", () => {
    // Remove all completed tasks
    let completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        taskList.removeChild(task);
    });
});

