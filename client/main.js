import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';


(function(){

  angular.module('capitals-prototype', [
    angularMeteor,
    uiRouter,
  ]).config(config);


  console.log('init The Capitals Prototype app!');

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
      console.log('Config')
      console.log($stateProvider)
      $stateProvider
        .state('project-overview', {
            url: '/project-overview',
            templateUrl: 'client/projects/overview/overview.html',
            controller: 'ProjectOverview',
            controllerAs: 'overview'
        })
        .state('create-project', {
            url: '/create-project',
            templateUrl: 'client/projects/create/create.html'
        })
        .state('single-project/:slug', {
            url: '/single-project/:slug',
            templateUrl: 'client/projects/single/single.html',
            params: {
                projectId: "test"
            },
            controller: 'SingleProject',
            controllerAs: 'single'
        })

        $locationProvider.html5Mode(true);

        //  $urlRouterProvider.otherwise("/404");
  }


})();
