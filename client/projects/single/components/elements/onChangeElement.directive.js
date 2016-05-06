import capitalsPrototype from "../../../../main.js";


(function(){
  angular.module('capitals-prototype')
  .directive('onChangeElement', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        controller: function($scope) {

        },
        link: function(scope, elements, attrs, ngModel) {

            elements.bind('change', function(){

              console.log(scope.oldVal)
                $(this).addClass('changedField');
            })
        }
    }
});

})();
