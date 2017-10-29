
(function() {
var app = angular.module("MyGridApp",["ngTouch", "ui.grid"]);

app.controller("bodyController", ['$scope', function($scope) {
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
 $scope.userLinkTemplate= "<a href='/path/to/user/details/{{row.entity.userId}}'>user details</a>";
                     
  $scope.gyan='hello';  
    $scope.gridRowClick = row => {
      console.log(row);
      // or maybe $location.path(row.url)?
    };
    $scope.gridOptions = { data : 'myData', 
      enableCellEditOnFocus: true,
      rowTemplate: 'app/components/tracking-record/grid-row.html',
      columnDefs: [ 
    { name: 'name',displayName:'kukura', enableSorting: false, enableCellEdit: false },
    { name: 'age',displayName:'mendha',cellTemplate: $scope.userLinkTemplate,},]
      
    };// $scope.myData is also acceptable but will not update properly. OK to use the object if you don't care about updating the data in the grid.
}]);
}());