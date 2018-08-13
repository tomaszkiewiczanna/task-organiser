document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#addTaskButton');
    document.querySelector("#taskDate").valueAsDate = new Date();

    //licznik zadań część 1 - dodanie do strony
    var infoIn = document.querySelector('.infoIn');
    var counterSpan = document.createElement("span");
    counterSpan.setAttribute('id', 'counter');
    infoIn.insertBefore(counterSpan, infoIn.children[5]);
    counterSpan.innerHTML = '<br>Tasks to finish: <span id="counterNumb">0</span>';


    button.addEventListener('click', function () {
        var taskInput = document.querySelector('#taskInput');
        var taskListUl = document.querySelector('#taskList');
        if (taskInput.value.length <= 1 || taskInput.value.length >= 101) {
            alert('Task description must be between 1 - 100 letters!');
        } else {

            //tworzy nowe zadanie
            var newTaskLi = document.createElement('li');
            taskListUl.appendChild(newTaskLi);
            newTaskLi.innerHTML = '<h1>' + taskInput.value + '</h1><button class="deleteButton">Delete</button><button class="completeButton">Complete</button>';
            taskInput.value = "";

            //licznik zadań część 2 - aktualizacja przy nowym zadaniu
            var counterNumb =document.querySelector('#counterNumb');
            counterNumb.innerText = parseInt(counterNumb.innerText,10) + 1;

            //usuwanie zadania
            var deleteButton = newTaskLi.querySelector("button");
            deleteButton.addEventListener('click', function () {
                newTaskLi.parentElement.removeChild(newTaskLi);
            })

            //dodawanie statusu ukończenia zadania
            var completeButton = newTaskLi.lastChild;
            completeButton.addEventListener('click', function () {
                if (newTaskLi.className.indexOf("completed") === -1) {
                    newTaskLi.classList.add('completed');
                } else {
                    newTaskLi.classList.remove('completed');
                }
            })

            //licznik zadań część 3 - przy wykonaniu zadania
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

            //usuwanie zrobionych zadań
            var removeFinished = document.querySelector('#removeFinishedTasksButton');
            removeFinished.addEventListener('click', function () {
                var completedTasks = document.querySelectorAll('.completed');
                for (var i = 0; i < completedTasks.length; i++) {
                    completedTasks[i].parentElement.removeChild(completedTasks[i]);
                }
            })






        }
    })
    




})
