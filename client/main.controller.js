import capitalsPrototype from "./main.js";
import { SlackUsers } from '../imports/api/slackUsers.js';


  (function(){
    angular.module('capitals-prototype')
    .controller('MainController', ['$rootScope', '$scope', '$http', '$q', '$location', '$reactive', '$state', '$timeout', '$transitions', __MainController]);

    function __MainController($rootScope, $scope, $http, $q, $location, $reactive, $state, $timeout, $transitions) {
      console.log('init main controller')

        $reactive(this).attach($scope);

        this.subscribe('slackUsers');
        var self = this;



        $transitions.onSuccess({ to: "*"}, function($state){
          console.log('transition to: ')
          console.log($state.current)

           self.currentUrl = $state.current.url;
        })



        this.authenticate = function() {
            var param = $location.search().code;

            $http.get('https://slack.com/api/oauth.access?client_id=2172671931.41998025923&client_secret=36ce901a7dd8a6266506d98df46c1bee&code=' + param)
            .then(function(slack){

                if(slack.data.ok) {

                    var access_token = slack.data.access_token;

                    if (localStorage.getItem('access_token') && localStorage.getItem('access_token') === access_token)  {
                        console.log('Exisiting user, grant permission');
                        self.status = "ALREADY_LOGGED_IN";
                        $location.path('/project-overview')


                    }
                    else {
                      console.log('New user: put it in the DB');
                      // store data to DB
                      var team_id = slack.data.team.id;
                      var user_id = slack.data.user.id;
                      var user_name = slack.data.user.name;
                      var img_url_24 = slack.data.user.image_24;

                      // if access token doesnt exist, put it i db
                      Meteor.call('insertUser', user_name, img_url_24, access_token, team_id, user_id);
                      localStorage.setItem('access_token', access_token);
                      localStorage.setItem('username', user_name);

                      self.localStorageAccessToken = access_token;
                      self.username = user_name;

                      self.status = "SUCCESS";

                      $timeout(function(){

                        $location.path('/project-overview')

                      }, 6000)


                    }

                }
                else {
                    console.warn('Slack: API ERROR')
                }
            });
        }


      if ($location.search().code) {
           this.authenticate();
      }


      console.log(this)

      this.signOut = function() {
        $http.post('https://slack.com/api/auth.revoke?token=' + this.getReactively('access_token'))
      }

      this.helpers({

        slackUsers() {
            var user = SlackUsers.findOne({ }, {})

            if (user) {

              this.access_token = user.access_token;
              return user;

            }
        },

        checkAuth() {
          var d = $q.defer();



          console.log("this.getReactively('localStorageAccessToken')" )
          console.log(this.getReactively('localStorageAccessToken'))

          $http.get('https://slack.com/api/users.identity?token=' + localStorage.getItem('access_token'))
          .then(function(response){

              console.log('check auth')
              d.resolve(response.data.user)
              console.log(response)

          });

          return d.promise;

        },

      })


    }

  })();
