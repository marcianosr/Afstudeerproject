import capitalsPrototype from "../../main.js";
import { Projects } from '../../../imports/api/projects.js';
import { Components } from '../../../imports/api/components.js';



(function(){

  angular.module('capitals-prototype')
  .controller('SingleProject', __singleProject);

  function __singleProject($scope, $meteor, $reactive, $compile, $state, SingleProject) {

      // console.log('Controller Single project');

      $reactive(this).attach($scope);

      var self = this;


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




      this.removeElement = function(elements) {

        console.log('meteor call remove');

        // GET COMPONENT ID FROM ARRAY : POSITION [2] CAN BE CHANGED DUE TO 'SELECT' DROPDOWN!!!
        var componentId = elements[2];

        console.log(elements)

        Meteor.call('removeElement', 'DGhrmhamdng5QKfDj', componentId, elements)

      }

      this.helpers({
        projects() {
          var projects = Projects.findOne({name: 'NGSN'}, {});
          if(projects) {
            return projects;
          }

        },
        components() {

            var components = Components.find({projectId: 'DGhrmhamdng5QKfDj'});

            if(components) {
              return components;
            }

        }


      });




  }

})();
