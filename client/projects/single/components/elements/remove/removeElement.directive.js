import capitalsPrototype from "../../../../../main.js";

(function(){
  angular.module('capitals-prototype')
  .directive('removeElement', function() {
    return {
        restrict: 'E',
        replace:true,
        scope: {
          removeEl: "&"
        },
        controller: "SingleProject",
        controllerAs: "single",
        template:'<div class="col-xs-1"><i class="fa fa-times fa-2x remove" ng-click="removeEl()" aria-hidden="true"></i></div>',
        link: function(scope, element, attrs) {


          $(element).on('click', function(){

              /*
              * BEWARE: Multiple of the same values can still be deleted at once
              */

              $(this).closest('.form-group').css('background', 'red');
              var elements = [];


              var getElements = $(this).closest('.form-group').find('input').each(function(){

                  elements.push($(this).val());
                  return elements;

              });

              var componentId = $(this).closest('.form-group').attr('componentId');

              elements.push(componentId)

              if (componentId) {
                // then there we take fields from an existing component
                scope.single.removeElement(elements);
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
