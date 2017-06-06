// Check off/on todos by clicking
$("#todo-list").on("click", "li", function() {
	$(this).toggleClass("completed");
})

// Click on deleteButton to delete todo
$("#todo-list").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

// Create a new todo through the input field
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		var todoText = $(this).val();
		$("#todo-list").append(createTodoHTML(todoText));
		$(this).val("");
	}
})

function createTodoHTML (text) {
	var base = "<li><span>X</span> " ;
	var end = "</li>" ;
	return base + text + end
}