import capitalsPrototype from "../../main.js";
import { Projects } from '../../../imports/api/projects.js';
import { Components } from '../../../imports/api/components.js';

(function(){

    angular.module('capitals-prototype')
    .service('SingleProject', singleProject);

    function singleProject($state) {
        console.log('init singleProject Service');



        this.callThisShizzle = function(name) {

        }

        this.changeComponentName = function(name) {
            // Meteor.call('changeComponentName', componentId, name)
        }

        this.saveNewComponent = function(newComponent) {
            console.log('save new component SERVICE')
            console.log(newComponent)
            Meteor.call('insertComponent', 'DGhrmhamdng5QKfDj', "Nameless Component", newComponent);

        }

        this.getNewCreatedElements = function(element) {
            console.log(element);
            console.log('insert those elementsss')
            Meteor.call('insertElement', element);
        }

        this.updateElementInComponent = function(element, i, componentId) {

              console.log('call from service: element')

        }

        this.checkAllChanges = function(action, elements) {
            console.log('ABORT: First check ALL changes before save. ');
            console.log(elements)
            if(action === "newComponent") {
                this.saveNewComponent(elements);
            }
            if(action === "newElement") {
                this.getNewCreatedElements(elements);
            }

            $state.go('single-project', {}, {reload: true});

        }

    }


})();
