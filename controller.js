angular.module('directiveApp').controller('mainCtrl', function($scope, mainService) {
  $scope.test = 'Its working!!';


  $scope.getPokemon = function() {
    mainService.getPokemon().then(function(responseFromMainService) {
      $scope.pokemon = responseFromMainService.results;
      console.log($scope.pokemon)
    })
  }
  $scope.getPokemon();
}) // end controller