let user = require('./rendererLoginPage.js')
let course = require('./rendererLoginPage.js')

//console.log(user.user);
//console.log(user.course);

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
		$("#app").load("chatPage.html");
		contactId = '#contact' + $(this).attr("id");
		module.exports.contactName = $(contactId).find('dt').text();
		module.exports.contactCourse = $(contactId).find('dd').text();
	});
});


