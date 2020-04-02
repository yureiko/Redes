let user = require('./rendererLoginPage.js')
let course = require('./rendererLoginPage.js')

console.log(user.user);
console.log(user.course);

$("h1").html(user.user);
$("#userCourse").html(user.course);

$('#courseInput').val(course);

$(document).ready( function() {

	$("#talkButton").on("click", function() {
		$("#app").load("chatPage.html");
		//console.log($('#user').val());
		//console.log($('#course').val());
	});
});


