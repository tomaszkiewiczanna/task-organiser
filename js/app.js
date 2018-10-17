document.addEventListener('DOMContentLoaded', ()=> {
    //zamienne
    const infoIn = document.querySelector('.infoIn');
    const addButton = document.querySelector('#infoIn-addTaskButton');
    let taskInput = document.querySelector('#infoIn-taskInput');
    let dateInput = document.querySelector("#infoIn-taskDate");
    let priorityInput = document.querySelector("#infoIn-taskPriority");
    let taskArr = [];
    const sortBtnDate = document.querySelector(".sorting-date");
    const sortBtnPriority = document.querySelector(".sorting-priority");


    const infoOut = document.querySelector('.infoOut');
    const taskListUl = document.querySelector('#infoOut-taskList');
    const removeFinished = document.querySelector('.removeFinishedTasksButton');
    let finishedTasksArr = [];

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

    //utworzenie licznik zadań
    const counterSpan = document.createElement("span");
    counterSpan.setAttribute('id', 'task-counter');
    infoOut.insertBefore(counterSpan, infoOut.firstChild);
    counterSpan.innerHTML = `You have <span id="task-counter-numb">0</span> tasks to make.`;
    const counterNumb = document.querySelector('#task-counter-numb');

    //FUNKCJE
    function refreshCounter() {
        finishedTasksArr = [];
        taskArr.forEach((task, i) => {
            if (task.taskDone && finishedTasksArr.indexOf(i) === -1) {
                finishedTasksArr.push(i);
            }
        });
        counterNumb.innerHTML = taskArr.length - finishedTasksArr.length;
        if (finishedTasksArr.length > 0) {
            removeFinished.style.display = 'block';
        } else {
            removeFinished.style.display = 'none';
        }
    }

    // tworzenie li z tablicy zadań
    function refreshList(arr) {
        taskListUl.innerHTML = '';
        arr.forEach(el => {
            const newTaskLi = document.createElement('li');
            newTaskLi.innerHTML = `
                    <span class="infoOut-taskList-li-square"></span><h1>${el.taskName}</h1><br>
                    <p>until ${el.taskDate[2]} ${monthNames[Number(el.taskDate[1])-1]} 
                    ${el.taskDate[0]}</p><button class="deleteButton">Delete</button>
                    <button class="completeButton">Completed</button>`;
            taskListUl.appendChild(newTaskLi);
            newTaskLi.id = el.taskKey;
            newTaskLi.querySelector('.infoOut-taskList-li-square').style.background = colorsArr[el.taskPriority - 1];
            if (el.taskDone) {
                newTaskLi.classList.add('completed')
            }
            ;
        })
    }

    //dodanie zadania
    addButton.addEventListener('click', () => {
        if (taskInput.value.length < 1 || taskInput.value.length >= 101) {
            alert('Task description must be between 1 - 100 letters!');
        } else if (Number(priorityInput.value) === 0) {
            alert('Set the priority from 1 up to 10 ');
        }
        else {
            //obiekt zadania dodany do tablicy
            taskArr.push({
                taskKey: new Date ().getTime(),
                taskName: taskInput.value,
                taskDateForm: new Date (dateInput.value),
                taskDate: dateInput.value.split("-"),
                taskPriority: Number(priorityInput.value),
                taskDone: false
            });
            console.log(taskArr);

            refreshCounter();
            refreshList(taskArr);

            //reset formularza
            taskInput.value = "";
            priorityInput.value = "";
            dateInput.value = "";
        }
    })

    //obsługa buttonów w Ul
    taskListUl.addEventListener('click', (e) => {
        if (e.target.classList.contains("deleteButton")) { //usuwanie zadania                                let indexDelete;
            const parentLiID = e.target.parentElement.id;
            let indexDelete;
            taskArr.forEach((el, i) => {
                if (el.taskKey === Number(parentLiID)) {
                    indexDelete = i
                }
            });
            taskArr.splice(indexDelete, 1);
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            refreshCounter();
            refreshList(taskArr);
        } else if (e.target.classList.contains("completeButton")) { //status ukończenia zadania
            let indexComp;
            const parentLiID = e.target.parentElement.id;
            taskArr.forEach((el, i) => {
                if (el.taskKey === Number(parentLiID)) {
                    indexComp = i;
                }
            });
            if (e.target.parentElement.classList.contains("completed")) {
                e.target.parentElement.classList.remove('completed');
                e.target.innerText = `completed`;
                taskArr[indexComp].taskDone = false;
            } else {
                e.target.parentElement.classList.add('completed');
                e.target.innerText = `not ready`;
                taskArr[indexComp].taskDone = true;
            }
            refreshCounter();
        }
    })
    //usunięcie gotowych zadań
    removeFinished.addEventListener('click', () => {
        const notMadeArr = [];
        taskArr.forEach(el => {
            if (!el.taskDone) {
                notMadeArr.push(el);
            }
        })
        taskArr = notMadeArr;
        refreshList(taskArr);
        refreshCounter();
    })

    //sortowanie po dacie
    sortBtnDate.addEventListener('click', ()=>{
        taskArr.sort(function(a,b){
            return a.taskDateForm - b.taskDateForm;
        });
        refreshList(taskArr);
        refreshCounter();
    })
    //sortowanie po priorytecie
    sortBtnPriority.addEventListener('click', ()=>{
        taskArr.sort(function(a,b){
            return b.taskPriority - a.taskPriority;
        });
        refreshList(taskArr);
        refreshCounter();
    })
})