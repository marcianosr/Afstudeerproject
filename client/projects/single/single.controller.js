import capitalsPrototype from "../../main.js";
import { Projects } from '../../../imports/api/projects.js';
import { Components } from '../../../imports/api/components.js';


(function(){

  angular.module('capitals-prototype')
  .controller('SingleProject', __singleProject);

  function __singleProject($scope, $meteor, $reactive, $compile, $state, $stateParams, SingleProject) {

      // console.log('Controller Single project');


  //    console.log($stateParams)

      $reactive(this).attach($scope);

      this.subscribe('projects');
      this.subscribe('components');
      this.subscribe('elements');

      this.createNewElement = function(index) {

          console.log('create new Element');

          // use compile to include the directive via javascript onClick
          var element = $compile("<element-group type='newElementGroup' index='" + index + "'></element-group>")($scope);
      }

      this.createNewComponent = function() {

          console.log('create new component');

          // use compile to include the directive via javascript onClick
          var component = $compile("<new-component></new-component>")($scope);
      }





      this.helpers({

        projects() {
          var projects = Projects.findOne({ slug: $stateParams.slug }, {});
          if(projects) {
            // console.log('projects')
            //
             console.log(projects)
             this.projectId = projects._id;
            return projects;
          }

        },

        components() {
            var components = Components.find({projectId: 'XC7AEf25Wvbrh3gen'});
            console.log('load components:  ')
            console.log(this.projectId)
            if(components) {
              return components;
            }
        },

        elements() {
            var elements = Components.find({name: 'Login Screen'}, {});

            if(elements) {
              return elements;
            }
        }

      });
  }

})();
