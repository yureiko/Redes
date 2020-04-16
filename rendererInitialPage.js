var user = require('./rendererLoginPage.js')
var course = require('./rendererLoginPage.js')


$("h1").html(user.user);
$("#userCourse").html(user.course);

$('#courseInput').val(course);

var nobodyIsOnline = false;

if (nobodyIsOnline){
	$("#contactsList").hide();
	$("#contacts").html("Não há contatos disponíveis!");
	$("#contacts").css('background-color', 'red');
}

$(document).ready( function() {

	$('button.chatButton').click(function() {
		contactId = '#contact' + $(this).attr("id");
		console.log(contactId);
		module.exports.contactName = $(contactId).find('dt').text();
		module.exports.contactCourse = $(contactId).find('dd').text();
		$("#app").load("chatPage.html");
		$.getScript("rendererChatPage.js", function(){});
	});
});



