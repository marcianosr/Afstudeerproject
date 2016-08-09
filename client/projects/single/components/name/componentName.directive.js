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
              $scope.collapsed = false;


              $scope.projects = Projects.findOne({ slug: $stateParams.slug });

              $scope.componentName = "Nameless Component";


              $scope.changeComponentName = function(name, componentId) {

                  Meteor.call('changeComponentName', $scope.projects._id, componentId, name)
              }

              $scope.toggle = function() {
                  return $scope.editing = !$scope.editing;
              }

              $scope.setNewComponentName = function(name, componentId) {

                  //  console.log(name)
                  // console.log(componentId)
                  //
                  $scope.changeComponentName(name, componentId)

                  $scope.toggle();
                  $scope.componentName = name;

              }

              $scope.collapse = function() {
                  return $scope.collapsed = !$scope.collapsed;
              }
          },
          controllerAs: "changeComponentName",
          link: function(scope, elements, attrs) {


            $('.component-nav').find('.fa-chevron-down').on('click', function(){

                if(!scope.collapsed) {
                  $(this).closest('section.component').find('fieldset').slideUp('fast');
                  $(this).closest('section.component').find('.new-element').slideUp('fast');

                  $(this).removeClass('fa-chevron-down');
                  $(this).addClass('fa-chevron-right');

                }
                else {
                  $(this).closest('section.component').find('fieldset').slideDown('fast');
                  $(this).closest('section.component').find('.new-element').slideDown('fast');

                  $(this).removeClass('fa-chevron-right');
                  $(this).addClass('fa-chevron-down');

                }

                scope.collapse();

            });

            scope.$watch(elements, function(){

                $(elements).find($('.title')).on('click', function(e){

                    var componentId = $(elements).parent('section.component').attr('componentId');

                    // if user clicks on input, then do not call $scope.toggle()
                    if ((e.target).nodeName == "INPUT") {
                        console.log('you clicked input');
                        return;
                    }

                    var name = $(this).find($("input.component-name")).val();

                    // if name has been filled in yet, grab the existing out of the h1
                    if (name == undefined) {
                        name = $(this).find($("h1.component-name")).text();
                    }

                    // check if binding values have changed, in this case input
                    // http://jimhoskins.com/2012/12/17/angularjs-and-apply.html
                    scope.$apply(function(){
                      scope.setNewComponentName(name, componentId);
                    })

              });

            });


          }

      }
  }

})();
