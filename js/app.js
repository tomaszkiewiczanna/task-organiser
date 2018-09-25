document.addEventListener('DOMContentLoaded', function () {
    //zamienne
    const infoIn = document.querySelector('.infoIn');
    const addButton = document.querySelector('#infoIn-addTaskButton');
    let taskInput = document.querySelector('#infoIn-taskInput');
    let dateInput = document.querySelector("#infoIn-taskDate").valueAsDate = new Date();
    let priorityInput = document.querySelector("#infoIn-taskPriority");
    const taskArr = [];

    const infoOut = document.querySelector('.infoOut');
    const taskListUl = document.querySelector('#infoOut-taskList');

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    const colorsArr = [
        "#83A57A", "#8AA56B", "#AAD185", "#F2EAA7", "#F2F990",
        "#F2E098", "#f2d06b", "#EAB06E", "#ff7c35", "#ff4104"
    ];
    let finishedTasksArr = [];

    //utworzenie licznik zadań
    const counterSpan = document.createElement("span");
    counterSpan.setAttribute('id', 'task-counter');
    infoOut.insertBefore(counterSpan, infoOut.firstChild);
    counterSpan.innerHTML = `You have <span id="task-counter-numb">0</span> tasks to make.`;


    function refreshCounter() {
        finishedTasksArr = [];
        taskArr.forEach((task, i) => {
            if (task.taskDone && finishedTasksArr.indexOf(i) === -1) {
                finishedTasksArr.push(i);
            }
        });
        document.querySelector('#task-counter-numb').innerHTML = taskArr.length - finishedTasksArr.length;
    }

    //event start
    addButton.addEventListener('click', function () {
        if (taskInput.value.length < 1 || taskInput.value.length >= 101) {
            alert('Task description must be between 1 - 100 letters!');
        } else if (priorityInput.value === "") {
            alert('Set the priority form 1 up to 10 ');
        }
        else {
            //obiekt zadania dodany do tablicy
            taskArr.push({
                taskKey: dateInput.getTime(),
                taskName: taskInput.value,
                taskDate: dateInput,
                taskPriority: Number(priorityInput.value),
                taskDone: false
            });

            //reset formularza
            taskInput.value = "";
            priorityInput.value = "";
            dateInput = new Date();
            refreshCounter();

            // tworzenie li z tablicy zadań
            function refreshList(arr) {
                taskListUl.innerHTML = '';
                arr.map(el => {
                    const newTaskLi = document.createElement('li');
                    newTaskLi.innerHTML = `
                    <span class="infoOut-taskList-li-square"></span><h1>${el.taskName}</h1><br>
                    <p>until ${el.taskDate.getDate()} ${monthNames[el.taskDate.getMonth()]} 
                    ${el.taskDate.getFullYear()}</p><button class="deleteButton">Delete</button>
                    <button class="completeButton">Completed</button>
                    `;
                    taskListUl.appendChild(newTaskLi);
                    newTaskLi.id = el.taskKey;
                    newTaskLi.querySelector('.infoOut-taskList-li-square').style.background = colorsArr[el.taskPriority - 1];
                    if (el.taskDone) {
                        newTaskLi.classList.add('completed')
                    }
                    ;
                })
            }
            refreshList(taskArr);

            //usuwanie zadania
            const deleteButtons = taskListUl.querySelectorAll(".deleteButton");
            deleteButtons.forEach(delBtn => {
                delBtn.addEventListener('click', () => {
                    let indexDelete;
                    const parentLi = delBtn.parentElement.id;
                    taskArr.forEach((el, i) => {
                        if (el.taskKey === Number(parentLi)) {
                            indexDelete = i;
                        }
                    });
                    taskArr.splice(indexDelete, 1);
                    delBtn.parentElement.parentElement.removeChild(delBtn.parentElement);
                    refreshCounter();
                })
            })

            //status ukończenia zadania
            const completeButton = taskListUl.querySelectorAll('.completeButton');
            completeButton.forEach(compBtn => {
                compBtn.addEventListener('click', () => {
                    let indexComp;
                    const parentLi = compBtn.parentElement.id;
                    taskArr.forEach((el, i) => {
                        if (el.taskKey === Number(parentLi)) {
                            indexComp = i;
                        }
                    });

                    if (compBtn.parentElement.className.indexOf("completed") === -1) {
                        compBtn.parentElement.classList.add('completed');
                        compBtn.innerText = `not ready`;
                        taskArr[indexComp].taskDone = true;
                    } else {
                        compBtn.parentElement.classList.remove('completed');
                        compBtn.innerText = `complited`;
                        taskArr[indexComp].taskDone = false;
                    }
                    refreshCounter();
                })
            })

            //usuwanie zrobionych zadań
            const removeFinished = document.getElementById('infoOut-removeFinishedTasksButton');
            removeFinished.style.display = "block";
            removeFinished.addEventListener('click', () => {
                const completedTasks = document.querySelectorAll('.completed');
                completedTasks.forEach(finishedLi => {
                    finishedLi.parentElement.removeChild(finishedLi);
                })
            })
        }
    })
})
