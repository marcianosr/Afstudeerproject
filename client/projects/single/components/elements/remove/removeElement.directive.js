import capitalsPrototype from "../../../../../main.js";
import { Projects } from '/imports/api/projects.js';

(function(){
  angular.module('capitals-prototype')
  .directive('removeElement', function() {
    return {
        restrict: 'E',
        replace:true,
        scope: {
          removeEl: "&",
          pending: "=",
        },
        controller: function($scope, $reactive, $stateParams) {

            $scope.removeElement = function(elements) {

              console.log('meteor call remove');

              this.projects = Projects.findOne({ slug: $stateParams.slug })


              $scope.pending = !$scope.pending;

              // GET COMPONENT ID FROM ARRAY : POSITION [2] CAN BE CHANGED DUE TO 'SELECT' DROPDOWN!!!
              var componentId = elements[2];

              console.log(elements)

              // Meteor.call('removeElement', this.projects._id, componentId, elements)


            }
        },
        // controller: "SingleProject",
        // controllerAs: "single",
        templateUrl: 'client/projects/single/components/elements/remove/removeElement.html',
        link: function(scope, element, attrs) {


          $(element).on('click', function(){

              /*
              * BEWARE: Multiple of the same values can still be deleted at once
              */
              var inputs = $(this).closest('.form-group').find('input');

              if (scope.pending) {
                inputs.removeClass('pending-removal')
              }
              else {
                inputs.addClass('pending-removal');
              }

              var elements = [];

              var getElements = $(this).closest('.form-group').find('input').each(function(){

                  elements.push($(this).val());
                  return elements;

              });

              var componentId = $(this).closest('.form-group').attr('componentId');

              elements.push(componentId)

              if (componentId) {
                // then there we take fields from an existing component
                scope.$apply(function(){
                    scope.removeElement(elements);
                });

              }

              if (!componentId) {
                  // just remove the fields which are not stored in DB yet
                  console.log('no component ID');
                  $(this).closest('.form-group').remove();
              }


          });

        }
    }
});


})();
