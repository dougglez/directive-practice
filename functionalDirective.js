angular.module('directiveApp').directive('functionalDirective', function() {
  return {
    templateUrl: './functionalDir.html',
    scope: {
      poke: '='
    }, // ends scope
    controller: function($scope, mainService) {
      console.log("will this work?", $scope.poke);
      // mainService.getOnePokemon($scope.poke.url).then(function(responseFromMainService) {
      //   $scope.pokeInfo = responseFromMainService;
      // })

    }



  } // end return
}); // end directive