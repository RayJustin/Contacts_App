	// Allows the usage of id to distinguish contacts
	var id = 0
	// Stores the contacts in the global scope
	var arr = [];
	// Use edit to tell the submit button whether update the contact or create a new contact (See line 8-34)
	var edit = false;


	$('form').on('submit', function(event){
		// On line 40, edit is set to a number, which would evaluate to true, causing this if to run
		if (edit !== false) {
			updateContact();
			event.preventDefault();
			$(this)[0].reset('');
		}
		// If not editing, new contact is created
		else {
			// Stops the submit button from refreshing the page.
			event.preventDefault();
			// Stores the object in the contact variable
			contact = createObject();
			// Creates a name in each contact for an id value.
			contact.id = id;
			// Stores the value of the firstname field in a variable
			var value = $('input#firstname').val()
			// Doesn't allow a contact with no first name
			if ( value === ''){
				alert('Please enter contact name');
				}
			else { 
				arr.push(contact);
				updateList();
				$(this)[0].reset('');
				id++;
				}
		}
	}); 

	// Must supply the 'li' as a parameter if the li isn't on the page when the code initially runs.
	$('ul').on('click', 'li', function(){
		// edit gets the id of the li that is clicked
		edit = $(this).attr('id'); 
		// Grabs the object in the array that corresponds to the id of the li that was clicked
		$('input#firstname').val(arr[edit].firstname);
		$('input#lastname').val(arr[edit].lastname);
		$('input#phonenumber').val(arr[edit].phonenumber);
		$('input#street').val(arr[edit].street);
		$('input#city').val(arr[edit].city);
		$('input#state').val(arr[edit].state);
	});



function createObject() {
	// Creates an array of values from the inputs
	var fields = $(':input').serializeArray();
	// Creates an empty object that will store name/values for contact
	var contact = {};
	// Takes an array of objects, and puts their names and values into the contact object
	for (i = 0; i < fields.length; i++) {
 		contact[fields[i].name] = fields[i].value;
	}
	return contact;
}


function updateContact() {
	// edit was set to the number of the object were editting (line 42), so edit will point to the object were editting here too.
	arr[edit].firstname = $('input#firstname').val();
	arr[edit].lastname = $('input#lastname').val();
	arr[edit].phonenumber = $('input#phonenumber').val();
	arr[edit].street = $('input#street').val();
	arr[edit].city = $('input#city').val();
	arr[edit].state = $('input#state').val();
	// Sets edit back to false, so a new contact can be created on the next click of Submit
	edit = false;
	updateList(); 
}

	// Clears the list items and replaces them with the arr[]
function updateList() {
	$('.contactList').html('');
	for (var i = 0; i < arr.length; i++) {
		$('.contactList').append(' <li id="'+ arr[i].id +'"> ' + arr[i].firstname + ' ' + arr[i].lastname + ' </li> ');
	}
}

	

