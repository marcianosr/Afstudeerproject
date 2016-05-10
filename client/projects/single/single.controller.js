import capitalsPrototype from "../../main.js";
import { Projects } from '../../../imports/api/projects.js';
import { Components } from '../../../imports/api/components.js';


(function(){

  angular.module('capitals-prototype')
  .controller('SingleProject', __singleProject);

  function __singleProject($scope, $reactive, $compile, $state, $stateParams) {

      console.log('Controller Single project');
      $reactive(this).attach($scope);

      this.subscribe('projects');
      this.subscribe('components');

      this.saveProject = function() {
          $state.reload();
      }

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

      this.saveNewComponent = function(newComponent) {
          console.log('Service: Save new component')
          console.log(newComponent)

          if(newComponent != undefined) {
            Meteor.call('insertComponent', this.getReactively('projectId'), "Nameless Component", newComponent);
          }

      }

      this.saveNewCreatedElements = function(element) {
          console.log(element);
          console.log('Service: Insert a new element')
          Meteor.call('insertElement', element);
      }

      this.changeComponentName = function(name, componentId) {
          // Meteor.call('changeComponentName', this.getReactively('projectId'), componentId, name)
      }

      this.helpers({

        projects() {
          var projects = Projects.findOne({ slug: $stateParams.slug }, {});

          if(projects) {
            console.log(projects)

            this.projectId = projects._id;
            this.slug = projects.slug;

            return projects;
          }

        },

        components() {
          // console.log(this.projectId)

            var components = Components.find({projectId: this.getReactively('projectId')});

            if(components) {
              return components;
            }
        }
      });
  }

})();
