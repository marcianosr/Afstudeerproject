(function(){

  angular.module('capitals-prototype')
  .directive('searchBar', function(){
      return {
          restrict: 'E',
          // require: 'ngModel',
          controller: ['$scope', function($scope){
              console.log('controller: search')
              $scope.marci = "test0";
              $scope.getSearch = function(item) {
                console.log('You searched for:')
                  console.log(item)


              }
          }],
          controllerAs: "searchbar",
          scope: {
              item: "=",
              components: "="
          },
          templateUrl: "client/projects/single/components/search/searchbar.html",
          link: function(scope, elements) {
            console.log('link: search')

          }

      }

  });

})();
