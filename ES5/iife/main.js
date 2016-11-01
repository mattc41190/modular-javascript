(function(tempString) {
  console.log('I am an IIFE');
  var temp = tempString;
})('I am code executing free from global scope pollution');

console.log(typeof temp);
