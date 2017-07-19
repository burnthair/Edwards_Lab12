var app = angular.module('listCreate', []);

app.controller('listCtrl', function($scope){
  $scope.toDoList = [];
  $scope.addItem = function(task) {
    $scope.toDoList.push(task);
  }
  $scope.removeItem = function(task) {
    $scope.toDoList.splice(task,1);
  }

});
