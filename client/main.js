import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';





(function(){

  angular.module('capitals-prototype', [
    angularMeteor,
    uiRouter,

  ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', config]).run(run);


  console.log('init The Capitals Prototype app!!!');


  function config($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('project-overview', {
            url: '/project-overview',
            templateUrl: 'client/projects/overview/overview.html',
            controller: 'ProjectOverview',
            controllerAs: 'overview'
        })
        .state('create-project', {
            url: '/create-project',
            templateUrl: 'client/projects/create/create.html',
            controller: 'CreateProject',
            controllerAs: 'newProject'
        })
        .state('single-project/:slug', {
            url: '/single-project/:slug',
            templateUrl: 'client/projects/single/single.html',
            controller: 'SingleProject',
            controllerAs: 'single'
        })
        .state('sign-in', {
            url: '/sign-in',
            templateUrl: 'client/users/signin/signin.html',

        })

        $locationProvider.html5Mode(true);

        //  $urlRouterProvider.otherwise("/404");
  }


  function run() {
      console.log('run')
  }


})();
