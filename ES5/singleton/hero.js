var hero = (function(name) {
  'use strict';

  function defeatEnemy() {
    console.log('Enemies defeated');
  }

  return {
    name: name,
    defeatEnemy: defeatEnemy
  }

})('sammy');
