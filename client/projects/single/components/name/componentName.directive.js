import capitalsPrototype from "../../../../main.js";

(function(){
  angular.module('capitals-prototype')
  .directive('componentName', componentName);

  function componentName(SingleProject) {
      return {
          templateUrl: 'client/projects/single/components/name/componentName.html',
          scope: {
            name: "@",
          },
          restrict: 'E',
          controller: function($scope) {
              // console.log("changeComponentName")

              $scope.editing = false;

              $scope.getNewComponentName = function(name) {

                  console.log(name)
                  return $scope.editing = !$scope.editing;
              }
          },
          controllerAs: "changeComponentName",
          link: function(scope, elements, attrs) {

            $(elements).find($('.title')).on('click', function(e){

                if (e.target != this && e.target == document.querySelector("input")) {
                  console.log('you clicked input');
                  return;
                }

                var getNewName = $(this).find($("input#component-name")).val();

                scope.$apply(function(){

                  scope.getNewComponentName(getNewName);

                });
            });

          }

      }
  }

})();
