angular.module('directiveApp').service('mainService', function($http) {

  this.getPokemon = function() {
    console.log('hitting pokeapi');
    return $http.get('http://pokeapi.co/api/v2/pokemon').then(function(responseFromAPI) {
      console.log(responseFromAPI)
          return responseFromAPI.data;
        })
  }

  this.getOnePokemon = function(url) {
    console.log('finding a pokemon');
    return $http.get(url).then(function(responseFromAPI) {
      return responseFromAPI.data;
    })
  }







  // this.newPokemon = function() {
  //   return $http.post().then(function(response) {
  //     return response.data;
  //   })
  // }
  //
})