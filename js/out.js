/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var addButton = document.querySelector('#infoIn-addTaskButton');\n    var taskInput = document.querySelector('#infoIn-taskInput');\n    var dateInput = document.querySelector(\"#infoIn-taskDate\").valueAsDate = new Date();\n    var priorityInput = document.querySelector(\"#infoIn-taskPriority\");\n    var infoIn = document.querySelector('.infoIn');\n    var infoOut = document.querySelector('.infoOut');\n    var taskListUl = document.querySelector('#infoOut-taskList');\n    var taskArr = [];\n    var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n    var colorsArr = [\"#83A57A\", \"#8AA56B\", \"#AAD185\", \"#F2EAA7\", \"#F2F990\", \"#F2E098\", \"#f2d06b\", \"#EAB06E\", \"#ff7c35\", \"#ff4104\"];\n\n    //licznik zadań część 1 - dodanie do strony\n    var counterSpan = document.createElement(\"span\");\n    counterSpan.setAttribute('id', 'task-counter');\n    infoOut.insertBefore(counterSpan, infoOut.firstChild);\n    counterSpan.innerHTML = 'You have <span id=\"task-counter-numb\"> ' + taskArr.length + ' </span> tasks to make.';\n\n    addButton.addEventListener('click', function () {\n        var _this = this;\n\n        if (taskInput.value.length < 1 || taskInput.value.length >= 101) {\n            alert('Task description must be between 1 - 100 letters!');\n        } else if (priorityInput.value === \"\") {\n            alert('Set the priority form 1 up to 10 ');\n        } else {\n\n            // tworzenie li dla listy zadań\n            var refreshList = function refreshList(arr) {\n                taskListUl.innerHTML = '';\n                arr.map(function (el) {\n                    var newTaskLi = document.createElement('li');\n                    newTaskLi.innerHTML = '\\n                    <span class=\"infoOut-taskList-li-square\"></span><h1>' + el.taskName + '</h1><br>\\n                    <p>until ' + el.taskDate.getDate() + ' ' + monthNames[el.taskDate.getMonth()] + ' \\n                    ' + el.taskDate.getFullYear() + '</p><button class=\"deleteButton\">Delete</button>\\n                    <button class=\"completeButton\">Completed</button>\\n                    ';\n                    taskListUl.appendChild(newTaskLi);\n                    newTaskLi.id = el.taskKey;\n                    newTaskLi.querySelector('.infoOut-taskList-li-square').style.background = colorsArr[el.taskPriority - 1];\n                    if (el.taskDone) {\n                        newTaskLi.classList.add('completed');\n                    };\n                });\n            };\n\n            //obiekt zadania dodany do tablicy\n            taskArr.push({ taskKey: dateInput.getTime(), taskName: taskInput.value, taskDate: dateInput, taskPriority: Number(priorityInput.value), taskDone: false });\n\n            //reset formularza\n            taskInput.value = \"\";\n            priorityInput.value = \"\";\n            dateInput = new Date();\n            refreshList(taskArr);\n\n            //usuwanie zadania\n            var deleteButtons = taskListUl.querySelectorAll(\".deleteButton\");\n            deleteButtons.forEach(function (delBtn) {\n                delBtn.addEventListener('click', function () {\n                    var indexDelete = void 0;\n                    var parentLi = _this.parentElement.id;\n                    taskArr.forEach(function (el, i) {\n                        if (el.taskKey === Number(parentLi)) {\n                            indexDelete = i;\n                        }\n                    });\n                    taskArr.splice(indexDelete, 1);\n                    refreshList(taskArr);\n                });\n            });\n\n            //dodaj status ukończenia zadania\n            var completeButton = taskListUl.querySelectorAll('.completeButton');\n            completeButton.forEach(function (compBtn) {\n                compBtn.addEventListener('click', function () {\n                    var indexComp = void 0;\n                    var parentLi = compBtn.parentElement.id;\n                    taskArr.forEach(function (el, i) {\n                        if (el.taskKey === Number(parentLi)) {\n                            indexComp = i;\n                        }\n                    });\n\n                    if (compBtn.parentElement.className.indexOf(\"completed\") === -1) {\n                        compBtn.parentElement.classList.add('completed');\n                        compBtn.innerText = 'not ready';\n                        taskArr[indexComp].taskDone = true;\n                    } else {\n                        compBtn.parentElement.classList.remove('completed');\n                        compBtn.innerText = 'complited';\n                        taskArr[indexComp].taskDone = false;\n                    }\n                });\n            });\n\n            //usuwanie zrobionych zadań\n            var removeFinished = document.querySelector('#infoOut-removeFinishedTasksButton');\n            removeFinished.addEventListener('click', function () {\n                var completedTasks = document.querySelectorAll('.completed');\n                for (var i = 0; i < completedTasks.length; i++) {\n                    completedTasks[i].parentElement.removeChild(completedTasks[i]);\n                }\n            });\n        }\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });