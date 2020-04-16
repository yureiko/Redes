var contact = require('./rendererInitialPage.js')
const inputEle = document.getElementById('enter');

console.log(contact.contactName);
console.log(contact.contactCourse);

$('#username').html(contact.contactName);
$('#userCourse').html(contact.contactCourse);

inputEle.addEventListener('keyup', function(e){
  var key = e.keyCode;
  if (key == 13) { // codigo da tecla enter
	$("#sentMessage").append("<p>" + this.value + "</p>");
  }
});

$('#closeChatButton').click(function() {
	$("#app").load("index.html");
	delete require.cache[require.resolve('./rendererInitialPage.js')]
	$.getScript("rendererInitialPage.js", function(){});
});