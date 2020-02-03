function TodoCtrl($scope) {
  $scope.doneTodos = [
    {text:'Learned AngularJS', done:false},         
    {text: 'Builded an app', done:false}
  ];
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false}
  ];
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  $scope.getDoneTodos = function () {
    return $scope.doneTodos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
    $scope.doneCompleted = function () {
        $scope.doneTodos = _.filter($scope.todos, function(todo){
          return !todo.done;
        });
    };
}