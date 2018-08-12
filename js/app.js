document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#addTaskButton');

    //licznik zadań część 1
    var body = document.querySelector('body');
    var counterSpan = document.createElement("span");
    counterSpan.setAttribute('id', 'counter');
    body.insertBefore(counterSpan, body.children[3]);
    counterSpan.innerHTML = 'Tasks to finish: <span id="counterNumb">0</span>';

    button.addEventListener('click', function () {
        var taskInput = document.querySelector('#taskInput');
        var taskListUl = document.querySelector('#taskList');
        var newTaskLi = document.createElement('li');

        if (taskInput.value.length <= 4 || taskInput.value.length >= 101) {
            alert('Task description must be between 5 - 100 letters!');
        } else {

            //tworzy nowy li
            taskListUl.appendChild(newTaskLi);
            newTaskLi.innerHTML = '<h1>' + taskInput.value + '</h1><button class="deleteButton">Delete</button><button class="completeButton">Complete</button>';
            taskInput.value = "";

            //licznik zadań część 2
            var counterNumb =document.querySelector('#counterNumb');
            counterNumb.innerText = parseInt(counterNumb.innerText,10) + 1;

            //usuwanie zadania
            var deleteButton = newTaskLi.querySelector("button");
            deleteButton.addEventListener('click', function () {
                newTaskLi.parentElement.removeChild(newTaskLi);
            })

            //dodawanie zadania
            var completeButton = newTaskLi.lastChild;
            completeButton.addEventListener('click', function () {
                if (newTaskLi.className.indexOf("completed") === -1) {
                    newTaskLi.classList.add('completed');
                } else {
                    newTaskLi.classList.remove('completed');
                }
            })

            //usuwanie zrobionych zadań
            var removeFinished = document.querySelector('#removeFinishedTasksButton');
            removeFinished.addEventListener('click', function () {
                var completedTasks = document.querySelectorAll('.completed');
                for (var i = 0; i < completedTasks.length; i++) {
                    completedTasks[i].parentElement.removeChild(completedTasks[i]);
                }
            })

            //licznik zadań część 3
            var completeButtons = document.querySelectorAll('.completeButton');

            for (var i=0; i<completeButtons.length; i++){
                completeButtons[i].addEventListener('click', function () {
                    var counterNumb =document.querySelector('#counterNumb');
                    var taskLis = document.querySelectorAll('li');
                    var completedTasks = document.querySelectorAll('.completed');
                    var notMade = taskLis.length - completedTasks.length;

                    counterNumb.innerText = notMade;
                })
            }




        }
    })
    




})
