import capitalsPrototype from "../../../../main.js";

(function(){
  angular.module('capitals-prototype')
  .directive('elementGroup', function(SingleProject) {
    console.log('init element-group')
    return {
        templateUrl: function(element, attrs) {

          if (attrs.type === "newElementGroup") {
              return "client/projects/single/components/elements/new/newElementGroup.html"
          }
          if (attrs.type === "elementGroup") {
            return "client/projects/single/components/elements/elementGroup.html"
          }
        },
        restrict: 'E',
        scope: {
          index: "@",
          component: "=",
          remove: "&"
        },
        // controller: 'SingleProject',
        // controllerAs: 'single',
        link: function(scope, elements, attrs) {

          scope.$watch(attrs.index, function () {
              //find specific component by index and append a new element
              //index comes from the this.createElement(index) func
              $("section[index=" + attrs.index + "] form fieldset").append(elements);
          });

        }
    }
});


})();




// angular.module('capitals-prototype')
// .directive('newElement', newElement);
//
// function newElement() {
//     return {
//         templateUrl: 'client/projects/single/newElement/newElement.html',
//         restrict: 'E',
//         replace:true,
//         scope: {
//           index: "@"
//         },
//
//         link: function(scope, elements, attrs) {
//           // console.log('index:' + attrs.index)
//
//
//           scope.$watch(attrs.index, function () {
//             console.log('getindex')
//             console.log(attrs.index)
//
//
//             //find specific component by index and append a new element
//             //index comes from the this.createElement(index) func
//             $("section[index=" + attrs.index + "] form fieldset").append(elements);
//           });
//
//           console.log(scope)
//
//           // $("section#" + attrs.index + " form fieldset").append(elements)
//         }
//     }
// }
