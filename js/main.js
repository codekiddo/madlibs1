angular.module('myApp', [])
  .controller('MainCtrl', function($scope) {


    $scope.gender = "male";

    $scope.toggleGender = function() {
      $scope.gender = $scope.gender == "male" ? "female" : "male";
    }

    $scope.$watch("gender", function() {
      if ($scope.gender == "male") {
        $scope.he_she = "she";
        $scope.his_her = "her";
      } else {
        $scope.he_she = "he";
        $scope.his_her = "his";
      }
    });

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