angular.module('directiveApp').service('youTubeService', function($http) {

  this.getProducts = function() {
    return $http.get('https://practiceapi.devmountain.com/products')
  }



})