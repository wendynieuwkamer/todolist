// Check off/on todos by clicking
$("li").click(function() {
	$(this).toggleClass("completed");
})

// Click on deleteButton to delete todo
$(".delete-button").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// Create a new todo through the input field
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var text = $(this).val();
		$("#todo-list").append(createNewTodo(text));
		$(this).val("");
	}
})

function createNewTodo (text) {
	var base = "<li><span>X</span> " ;
	var end = "</li>" ;
	return base + text + end
}