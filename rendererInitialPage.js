let user = require('./rendererLoginPage.js')
let course = require('./rendererLoginPage.js')

console.log(user.user);
$("p").html(user.user);
$('#courseInput').val(course);



