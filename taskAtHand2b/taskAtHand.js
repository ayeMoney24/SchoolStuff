function TaskAtHandApp(){
	var version = "2.2";
	appStorage = new appStorage("taskAtHand");
	
	function setStatus(message){
		$("#app>footer").text(message);
	}
	function onChangeTheme() {
		var theme = $("#theme>option").filter(":selected").val();
		setTheme(theme);
		appStorage.setValue("theme", theme);
	}

	function setTheme(theme) {
		$("#theme-style").attr("href", "themes/" + theme + ".css");
	}

	function loadTheme() {
		var theme = appStorage.getValue("theme");
		if (theme) {
			setTheme(theme);
			$("#theme>option[value=" + theme + "]")
				.attr("selected", "selected");
		}
	}

function addTask(){
	var taskName = $("#new-task-name").val();
	if(taskName){
		addTaskElement(taskName);
		$("#new-task-name").val("").focus();
	}
}

function addTaskElement(taskName){
	var $task = $("#task-template .task").clone();

	$("span.task-name", $task).text(taskName);
	
	$("#list").append($task);
	
	$("button.delete", $task).click(function(){
		removeTask($task);
	});
	$("button.move-up", $task).click(function(){
		moveTask($task, true);
	});
	$("button.move-down", $task).click(function(){
		moveTask($task, false);
	});
	$("span.task-name", $task).click(function(){
		onEditTaskName($(this));
	});
	
	$("input.task-name", $task).change(function(){
		onChangeTaskName($(this));
	});
	blur(function(){
		$(this).hide().siblings("span.task-name").show();
	});
	function removeTask($task){
		$task.remove();
		saveTaskList();
	}
	function moveTask($task, moveUp){
		if (moveUp){
			$task.insertBefore($task.prev());
		}
		else{
			$task.insertAfter($task.next());
		}
		saveTaskList();
	}
	saveTaskList();
	
	
	$task.click(function() {onSelectTask($task);});
	
}
function onEditTaskName($span){
	$span.hide()
		.siblings("input.task-name")
		.val($span.text())
		.show()
		.focus();
}
function onChangeTaskName($input){
	$input.hide();
	var $span = $input.siblings("span.task-name");
	if($input.val()){
		$span.text($input.val());
	}
	$span.show();
}
function loadTaskList(){
	var tasks = appStorage.getValue("taskList");
	if(tasks){
		for (var i in tasks){
			addTaskElement(tasks[i]);
		}
	}
}

function onSelectTask($task){
	if($task){
		$task.siblings(".selected").removeClass("selected");
		
		$task.addClass("selected");
	}
}

	this.start = function(){
		$("#new-task-name").keypress(function(e){
		if (e.which == 13) //enter keypress
		{
			addTask();
			return false;
		}
	})
	.focus();
	
	$("#header").append(version);
	loadTaskList();
	loadTheme();
	setStatus("ready");
	$("#theme").change(onChangeTheme);
};
}

function saveTaskList(){
	var tasks = [];
	$("#list .task span.task-name").each(function(){
		tasks.push($(this).text())
	});
	appStorage.setValue("taskList", tasks);
}

$(function(){
	window.app = new TaskAtHandApp();
	window.app.start();
});

