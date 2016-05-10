import capitalsPrototype from "../../../../main.js";

(function(){
  angular.module('capitals-prototype')
  .directive('componentName', componentName);

  function componentName() {
      return {
          templateUrl: 'client/projects/single/components/name/componentName.html',
          scope: {
            name: "@",
          },
          restrict: 'E',
          controller: function($scope) {

              $scope.editing = false;

              $scope.getNewComponentName = function(name, componentId) {

                  console.log(name)
                  console.log(componentId)
                  // SingleProject.changeComponentName(name, componentId)
                  return $scope.editing = !$scope.editing;
              }
          },
          controllerAs: "changeComponentName",
          link: function(scope, elements, attrs) {
            console.log(scope)
            $(elements).find($('.title')).on('click', function(e){

                var componentId = $(elements).parent('section.component').attr('componentId');

                console.log(e.target)
                if (e.target == document.querySelector("input")) {
                  console.log('you clicked input');
                  return;
                }

                var getNewName = $(this).find($("input#component-name")).val();

                scope.$apply(function(){

                  scope.getNewComponentName(getNewName, componentId);

                });
            });

          }

      }
  }

})();
