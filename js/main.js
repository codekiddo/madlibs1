angular.module('myApp', ['ngAnimate'])
  .controller('MainCtrl', function($scope) {

    $scope.data = {
      name: "",
      job_title: ""
    };

    $scope.gender = "male";

    $scope.$watch("gender", function() {
      if ($scope.gender == "male") {
        $scope.he_she = "she";
        $scope.his_her = "her";
        $scope.him_her = "her";
      } else {
        $scope.he_she = "he";
        $scope.his_her = "his";
        $scope.him_her = "him";
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

    $scope.toggleGender = function() {
      $scope.gender = $scope.gender == "male" ? "female" : "male";
    };

    $scope.startOver = function() {
      $scope.submitted = false;
      $scope.data = null;
    };
  });