import capitalsPrototype from "../../main.js";


(function(){

  angular.module('capitals-prototype')
  .directive('checkLanguage', function() {
      console.log('checkLanguage directive')
      return {

          restrict: 'E',
          // controller: 'CreateProject',
          // controllerAs: "checkLanguage",
          templateUrl: "client/projects/create/checkLanguage.html",
          scope: {
              newProject: "="
          },
          link: function(scope, element, attrs) {

              console.log(scope)

              scope.$watch(function(){
                    var input = $(element).find($('input.language:checked')).length

                     scope.newProject.selected = input;
                    // console.log(scope.newProject.selected)


                    $('input.language').on('click', function(){

                       if($(this).prop('checked')) {
                           scope.newProject.pristine = false;

                       }

                    });

              });




          }

      }

  });



})();
