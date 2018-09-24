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
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var addButton = document.querySelector('#infoIn-addTaskButton');\n    var taskInput = document.querySelector('#infoIn-taskInput');\n    var dateInput = document.querySelector(\"#infoIn-taskDate\").valueAsDate = new Date();\n    var priorityInput = document.querySelector(\"#infoIn-taskPriority\");\n    var infoIn = document.querySelector('.infoIn');\n    var infoOut = document.querySelector('.infoOut');\n    var taskListUl = document.querySelector('#infoOut-taskList');\n    var taskArr = [];\n\n    //licznik zadań część 1 - dodanie do strony\n    var counterSpan = document.createElement(\"span\");\n    counterSpan.setAttribute('id', 'task-counter');\n    infoOut.insertBefore(counterSpan, infoOut.firstChild);\n    counterSpan.innerHTML = 'You have <span id=\"task-counter-numb\"> ' + taskArr.length + ' </span> tasks to make.';\n\n    addButton.addEventListener('click', function () {\n\n        if (taskInput.value.length < 1 || taskInput.value.length >= 101) {\n            alert('Task description must be between 1 - 100 letters!');\n        } else if (priorityInput.value === \"\") {\n            alert('Set the priority form 1 up to 10 ');\n        } else {\n            //obiekt zadania dodany do tablicy\n            taskArr.push({ taskName: taskInput.value, taskDate: dateInput, taskPriority: Number(priorityInput.value) });\n            console.log(taskArr);\n\n            taskInput.value = \"\";\n            priorityInput.value = \"\";\n            dateInput = new Date();\n            taskListUl.innerHTML = '';\n\n            //tworzy nowe zadanie\n            var monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n            taskArr.map(function (el) {\n                var newTaskLi = document.createElement('li');\n                newTaskLi.innerHTML = '<span class=\"infoOut-taskList-li-square\"></span><h1>' + el.taskName + '</h1><br><p>until ' + el.taskDate.getDate() + ' ' + monthNames[el.taskDate.getMonth()] + ' ' + el.taskDate.getFullYear() + '</p><button class=\"deleteButton\">Delete</button><button class=\"completeButton\">Complete</button>';\n                taskListUl.appendChild(newTaskLi);\n            });\n\n            //usuwanie zadania\n            var deleteButton = newTaskLi.querySelector(\".deleteButton\");\n            deleteButton.addEventListener('click', function () {\n                newTaskLi.parentElement.removeChild(newTaskLi);\n            });\n\n            //dodawanie statusu ukończenia zadania\n            var completeButton = newTaskLi.lastChild;\n\n            completeButton.addEventListener('click', function () {\n                if (!newTaskLi.className.indexOf(\"completed\")) {\n                    newTaskLi.classList.add('completed');\n                } else {\n                    newTaskLi.classList.remove('completed');\n                }\n            });\n\n            //licznik zadań część 3 - przy wykonaniu zadania\n            var completeButtons = document.querySelectorAll('.completeButton');\n\n            //usuwanie zrobionych zadań\n            var removeFinished = document.querySelector('#infoOut-removeFinishedTasksButton');\n            removeFinished.addEventListener('click', function () {\n                var completedTasks = document.querySelectorAll('.completed');\n                for (var i = 0; i < completedTasks.length; i++) {\n                    completedTasks[i].parentElement.removeChild(completedTasks[i]);\n                }\n            });\n        }\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });