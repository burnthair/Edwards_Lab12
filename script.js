var app = angular.module('listCreate', []);

app.controller('listAdd', function($scope){
  $scope.toDoList = [];
  $scope.addItem = function(task) {
    $scope.toDoList.push(task);
  }
});

app.controller('listRemove', function($scope){
  $scope.addItem = function(task) {
    $scope.toDoList.push(task);
  }
});
