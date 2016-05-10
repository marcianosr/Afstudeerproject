import capitalsPrototype from "../../../../main.js";
import { Projects } from '/imports/api/projects.js';

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
          controller: function($scope, $stateParams) {

              $scope.editing = false;

              console.log($stateParams)

              $scope.projects = Projects.findOne({ slug: $stateParams.slug });


              $scope.changeComponentName = function(name, componentId) {

                  console.log($stateParams)
                  Meteor.call('changeComponentName', $scope.projects._id, componentId, name)
              }

              $scope.getNewComponentName = function(name, componentId) {

                  console.log(name)
                  console.log(componentId)

                  $scope.changeComponentName(name, componentId)
                  return $scope.editing = !$scope.editing;
              }
          },
          controllerAs: "changeComponentName",
          link: function(scope, elements, attrs) {
            console.log(scope)
            $(elements).find($('.title')).on('click', function(e){

                var componentId = $(elements).parent('section.component').attr('componentId');

                console.log($(e.target))
                console.log(document.querySelector("input.component-name"))
                if ((e.target).nodeName == "INPUT") {
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
