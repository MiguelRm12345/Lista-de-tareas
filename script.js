var taskList = []; x

function addTask() {
  var taskInput = document.getElementById("taskInput");

  if (taskInput.value === "") {
    alert("Por favor, ingrese una tarea");
    return;
  }

  var task = {
    id: Date.now(),
    description: taskInput.value,
    completed: false
  };

  taskList.push(task);
  displayTasks();
  taskInput.value = "";
}

function toggleCompleted(taskId) {
  var taskIndex = taskList.findIndex(function(task) {
    return task.id === taskId;
  });

  if (taskIndex !== -1) {
    taskList[taskIndex].completed = !taskList[taskIndex].completed;
    displayTasks();
  }
}

function deleteTask(taskId) {
  var taskIndex = taskList.findIndex(function(task) {
    return task.id === taskId;
  });

  if (taskIndex !== -1) {
    taskList.splice(taskIndex, 1);
    displayTasks();
  }
}

function displayTasks() {
  var taskListContainer = document.getElementById("taskList");
  taskListContainer.innerHTML = "";

  for (var i = 0; i < taskList.length; i++) {
    var task = taskList[i];

    var taskElement = document.createElement("div");
    taskElement.classList.add("task");

    var taskDescription = document.createElement("p");
    taskDescription.innerHTML = task.description;

    if (task.completed) {
      taskElement.classList.add("completed");
    }

    var toggleButton = document.createElement("button");
    toggleButton.innerHTML = "Tachar";
    toggleButton.onclick = function() {
      var taskId = parseInt(this.parentNode.getAttribute("data-task-id"));
      toggleCompleted(taskId);
    };

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.onclick = function() {
      var taskId = parseInt(this.parentNode.getAttribute("data-task-id"));
      deleteTask(taskId);
    };

    taskElement.appendChild(taskDescription);
    taskElement.appendChild(toggleButton);
    taskElement.appendChild(deleteButton);
    taskElement.setAttribute("data-task-id", task.id);
    taskListContainer.appendChild(taskElement);
  }
}



