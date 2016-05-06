import capitalsPrototype from "../../main.js";
import { Projects } from '../../../imports/api/projects.js';
import { Components } from '../../../imports/api/components.js';

(function(){

    angular.module('capitals-prototype')
    .service('SingleProject', singleProject);

    function singleProject($state) {
        console.log('init singleProject Service');

        this.changeComponentName = function(name) {
            // Meteor.call('changeComponentName', componentId, name)
        }

        this.saveNewComponent = function(newComponent) {
            console.log('Service: Save new component')
            console.log(newComponent)

            if(newComponent != undefined) {
              Meteor.call('insertComponent', 'DGhrmhamdng5QKfDj', "Nameless Component", newComponent);
            }

        }

        this.saveNewCreatedElements = function(element) {
            console.log(element);
            console.log('Service: Insert a new element')
            Meteor.call('insertElement', element);
        }

    }


})();
