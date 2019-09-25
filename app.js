//Global object in node js
console.log('Test run'); // Console derived from global
global.console.log('Test run'); //gives the same result as above

//setTimeout(), clearTimeout(), setInterval(), clearInterval() these are also derived from global object
 var textMessage = 'DC Comics'; // textMessage is not attached to global objecct
 console.log('Appending Global: '+global.textMessage); // displays undefined
 console.log('Without Global: '+textMessage); // displays var value

 //In plain javascript 
 //console.log('Appending Window: '+window.textMessage); // Works in javascript, fails in node
 //console.log('Without Global: '+textMessage); // works both in node and javascript

