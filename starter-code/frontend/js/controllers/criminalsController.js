angular.module('criminalsApp', [])
  // .factory('Criminal', function($resource) {
  //   return $resource(url, null, {})
  // });

  .controller('CriminalsController', function($scope, $http) {

      $scope.all = [];

      $scope.newCriminal = {};

      $scope.createCriminal = function() {
        console.log("createCriminal working");
        $http
          .post('http://localhost:3000/criminals', $scope.newCriminal)
            .then(function(response) {
              $scope.all.push(response.data.criminal);
            })
      }

      getCriminals();

      function getCriminals() {
        $http
          .get('http://localhost:3000/criminals')
            .then(function(response) {
              $scope.all = response.data.criminals;
              console.log($scope.all);
            })
      }

  });
