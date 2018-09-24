document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('#infoIn-addTaskButton');
    let taskInput = document.querySelector('#infoIn-taskInput');
    let dateInput = document.querySelector("#infoIn-taskDate").valueAsDate = new Date();
    let priorityInput = document.querySelector("#infoIn-taskPriority");
    const infoIn = document.querySelector('.infoIn');
    const infoOut = document.querySelector('.infoOut');
    let taskListUl = document.querySelector('#infoOut-taskList');
    const taskArr = [];

    //licznik zadań część 1 - dodanie do strony
    const counterSpan = document.createElement("span");
    counterSpan.setAttribute('id', 'task-counter');
    infoOut.insertBefore(counterSpan,infoOut.firstChild);
    counterSpan.innerHTML = `You have <span id="task-counter-numb"> ${taskArr.length} </span> tasks to make.`;

    addButton.addEventListener('click', function () {

        if (taskInput.value.length < 1 || taskInput.value.length >= 101) {
            alert('Task description must be between 1 - 100 letters!');
        } else if (priorityInput.value === "") {
            alert('Set the priority form 1 up to 10 ');
        }
        else {
            //obiekt zadania dodany do tablicy
            taskArr.push({taskName: taskInput.value, taskDate: dateInput, taskPriority: Number(priorityInput.value)});
            console.log(taskArr);

            taskInput.value = "";
            priorityInput.value ="";
            dateInput = new Date();
            taskListUl.innerHTML= '';

            //tworzy nowe zadanie
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            taskArr.map(el=>{
                let newTaskLi = document.createElement('li');
                newTaskLi.innerHTML = `<span class="infoOut-taskList-li-square"></span><h1>${el.taskName}</h1><br><p>until ${el.taskDate.getDate()} ${monthNames[el.taskDate.getMonth()]} ${el.taskDate.getFullYear()}</p><button class="deleteButton">Delete</button><button class="completeButton">Complete</button>`;
                taskListUl.appendChild(newTaskLi);
            })

            //usuwanie zadania
            var deleteButton = newTaskLi.querySelector(".deleteButton");
            deleteButton.addEventListener('click', function () {
                newTaskLi.parentElement.removeChild(newTaskLi);
            })

            //dodawanie statusu ukończenia zadania
            var completeButton = newTaskLi.lastChild;

            completeButton.addEventListener('click', function () {
                if (!newTaskLi.className.indexOf("completed")) {
                    newTaskLi.classList.add('completed');
                } else {
                    newTaskLi.classList.remove('completed');
                }
            })

            //licznik zadań część 3 - przy wykonaniu zadania
            var completeButtons = document.querySelectorAll('.completeButton');

            //usuwanie zrobionych zadań
            var removeFinished = document.querySelector('#infoOut-removeFinishedTasksButton');
            removeFinished.addEventListener('click', function () {
                var completedTasks = document.querySelectorAll('.completed');
                for (var i = 0; i < completedTasks.length; i++) {
                    completedTasks[i].parentElement.removeChild(completedTasks[i]);
                }
            })
        }


    })
})
