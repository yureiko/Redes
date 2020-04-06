let contact = require('./rendererInitialPage.js')
//let course = require('./rendererLoginPage.js')
console.log(contact.contactName);
console.log(contact.contactCourse);

$('#username').html(contact.contactName);
$('#userCourse').html(contact.contactCourse);

  
$(document).ready( function() {

	$('#closeChatButton').click(function() {
		$("#app").load("index.html");
	});
});