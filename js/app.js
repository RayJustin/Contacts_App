$('document').ready(function(){

$('form').on('submit', function(event){
	event.preventDefault();
	var contact = createObject();
	console.log(contact.firstname);
}); 

});


function createObject() {
	var fields = $(':input').serializeArray();
	var contact = {};
	for (i=0; i<fields.length; i++) {
 		contact[fields[i].name] = fields[i].value;
	}
	return contact;
};




