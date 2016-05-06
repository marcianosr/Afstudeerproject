import capitalsPrototype from "../../../../../main.js";

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
        controller: "SingleProject",
        controllerAs: "single",
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
                    scope.single.removeElement(elements);
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
