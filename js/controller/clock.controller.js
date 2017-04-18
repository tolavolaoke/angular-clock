
function ClockController($timeout) {
  var controller = this;

  controller.tick = function() {
    controller.date = new Date();
    $timeout(controller.tick, 1000);
  };
  controller.tick();
}




angular
    .module('Clock')
    .controller('ClockController', ClockController);


// angular
//   .module('Clock')
//   .controller('ClockController', ClockController);
