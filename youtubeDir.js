angular.module('directiveApp').directive('youtubeDir', function() {
  return {
    templateUrl: './youtubeDir.html',
    restrict: 'E',
    // scope: {
    //
    // },
    controller: function($scope, youTubeService) {
        $scope.getProducts = function() {
          youTubeService.getProducts().then(response => $scope.products = response.data);
        }

        // $scope.getProducts();
    } // end controller


  } // end return
}); // end directive