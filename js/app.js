$('document').ready(function(){

	var id = 0

	$('form').on('submit', function(event){
		event.preventDefault();
		var contact = createObject();
		contact.id = id;
		$('.contactList').append(' <li id="'+ contact.id +'"> ' + contact.firstname + ' ' + contact.lastname + ' </li> ');
		$(this)[0].reset('');
		id++;
		console.log(contact);
	}); 

	// Must supply the 'li' as a parameter when the li isn't on the page when the code initially runs.
	$('ul').on('click', 'li', function(){
		
		// Need to load the values of the object back into their respective inputs
	});
});


function createObject() {
	var fields = $(':input').serializeArray();
	var contact = {};
	for (i=0; i<fields.length; i++) {
 		contact[fields[i].name] = fields[i].value;
	}
	return contact;
}

// function updateContact() {}
	

