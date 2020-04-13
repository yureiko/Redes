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
		console.log($(contactId).find('dt').text());
		console.log($(contactId).find('dd').text())
		module.exports.contactName = $(contactId).find('dt').text();
		module.exports.contactCourse = $(contactId).find('dd').text();
		$("#app").load("chatPage.html");
		$.getScript("rendererChatPage.js", function(){});
	});
});

// problema: na primeira vez que tento abrir outro contato dá erro, mas depois funciona 
// ainda não entendi o motivo



