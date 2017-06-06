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
	var base = "<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " ;
	var end = "</li>" ;
	return base + text + end
}

// Hide add form by clicking plus button
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})