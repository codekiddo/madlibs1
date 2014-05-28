angular.module('myApp', [])
  .controller('MainCtrl', function($scope) {


    $scope.gender = "male";

    $scope.submit = function() {
      if ($scope.myForm.$error.required) {
        $scope.submitted = false;
        $scope.error = true;
      } else {
        $scope.submitted = true;
        $scope.reset = false;
        $scope.error = false;
      }
    };

    $scope.startOver = function() {
      $scope.submitted = false;
      $scope.data = null;
    };
  });