$('document').ready(function(){




});

function getContact() {

var firstName = 
	$('#firstname').val();
var lastName =
	$('#lastname').val();
	return (firstName + " " + lastName);
}
// When I use return, the text output in the console is RED and when I use
// console.log the text is BLACK. Why?

var contact = {
		name: "",
		phone: "",
		address: ""
	};

$('submitButton').on('click', function(){
	console.log();
}); 


