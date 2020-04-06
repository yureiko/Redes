
$("#logo").show()
setTimeout(function () { $("#logo").hide() }, 2000)
setTimeout(function () {
	$("#app").show() },
	2000)

$(document).ready( function() {

	$('#user').bind('input propertychange', function () {
		module.exports.user = this.value;
	})
	$('#course').bind('input propertychange', function () {
		module.exports.course = this.value;
	})

	$("#btnHome").on("click", function() {
		$("#app").load("index.html");
		console.log($('#user').val());
		console.log($('#course').val());
	});
});




