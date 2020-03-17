// precrtavanje uradjenih stavki (pomocu jQuery)
$('ul').on('click', 'li',function(){
	$(this).toggleClass('completed');
});

//klik na X da bi se obrisao zadatak
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//hvata novi zadatak iz input
		var todoText = $(this).val();
		$(this).val('');
		//kreira novi li i dodaje u ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
	}
});

$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle();
});