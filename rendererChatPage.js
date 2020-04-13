var contact = require('./rendererInitialPage.js')

console.log(contact.contactName);
console.log(contact.contactCourse);

$('#username').html(contact.contactName);
$('#userCourse').html(contact.contactCourse);

$(document).ready( function() {

	$('#closeChatButton').click(function() {
		$("#app").load("index.html");
		delete require.cache[require.resolve('./rendererInitialPage.js')]
		$.getScript("rendererInitialPage.js", function(){});
	});
});


