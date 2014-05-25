angular.module('myApp', [])
  .controller('MainCtrl', function($scope) {
    $scope.data = { 
      name: 'name',
      dirty_task:'dirty task',
      obnoxiuous_celebrity:'obnoxiuous celebrity',
      job_title:'job title',
      celebrity:'celebrity',
      huge_number:'huge number',
      tedious_task:'tedious task',
      useless_skill:'useless skill',
      adjective:'adjective'
    };

    $scope.gender = "male";
  });