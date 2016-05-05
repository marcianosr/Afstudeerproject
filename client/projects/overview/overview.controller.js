import capitalsPrototype from "../../main.js";
import { Projects } from '../../../imports/api/projects.js';


(function(){

  angular.module('capitals-prototype')
  .controller('ProjectOverview', __projectOverview);

  function __projectOverview($scope, $reactive) {

      console.log('Controller Project overview');
      $reactive(this).attach($scope);


      this.get = function() {
          console.log('get all projects')
      }

      this.get();

      this.helpers({

        projects() {
          var projects = Projects.find({});
          if(projects) {
            console.log('projects')

            console.log(projects)

            return projects;
          }

        }

      });


  }


})();
