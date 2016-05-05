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


      this.saveProject = function() {

          // this.saveNewComponent();
          // this.updateElementInComponent();
          // Meteor.call('insertElement', this.getNewCreatedElements());
          console.log('CONTROLLER CALL')
          // $state.go('single-project', {}, {reload: true});

      }

      this.saveNewComponent = function (elements) {


        // // ============================ SAVE NEW COMPONENT==========================

          //   $('section.new-component').each(function(i, element){
          //
          //     var that = this;
          //
          //     this.newElementsArr = [];
          //
          //     $(this).find($('.form-group')).each(function(){
          //
          //           var self = this;
          //
          //           this.newElementsObj = {};
          //
          //           var desc = $(this).find('input#element-description').each(function(){
          //             self.newElementsObj['description'] = $(this).val();
          //           });
          //
          //           var content = $(this).find('input#content').each(function(){
          //             self.newElementsObj['content'] = $(this).val();
          //           });
          //
          //           console.log(this.newElementsObj);
          //
          //           that.newElementsArr.push(this.newElementsObj);
          //
          //       });
          //
          //       Meteor.call('insertComponent', 'DGhrmhamdng5QKfDj', "Nameless Component", that.newElementsArr);
          //
          //       console.log('createnew component')
          //
          // });
          // console.log(this.newElementsArr)
      }


      this.getNewCreatedElements = function(elements) {

          // Meteor.call('insertElement', elements);


        // ============================ CREATE NEW ELEMENTS TO EXISTING ==========================

        // this.newElementsArr = [];
        // var that = this;
        //
        // $('.new-group-elements').each(function(){
        //
        //   var self = this;
        //
        //   this.newElementsObj = {};
        //
        //   var id = $(this).closest('section.old-component').attr('componentId')
        //
        //   var desc = $(this).find('input#element-description').each(function(){
        //     self.newElementsObj['description'] = $(this).val();
        //   });
        //
        //   var content = $(this).find('input#content').each(function(){
        //     self.newElementsObj['content'] = $(this).val();
        //   });
        //
        //   self.newElementsObj['componentId'] = id;
        //
        //   that.newElementsArr.push(this.newElementsObj);
        //
        // });
        //
        //
        // // console.log(this.newElementsArr)
        //
        // return this.newElementsArr;



      }


      this.updateElementInComponent = function() {
        // ============================ GET EXISTING COMPONENT==========================

        var components = $('section.old-component').each(function(i, element) {

            var componentId = $(element).attr('componentId');
            var getComponentsOfDB = Components.findOne({projectId: "DGhrmhamdng5QKfDj", _id: componentId}, {});

              // ============================ UPDATE EXISTING ELEMENT ==========================

            var descriptions = $(element).find('input#element-description').each(function(i, element){

                if (getComponentsOfDB.elements[i] != undefined) {
                  Meteor.call('updateElement', componentId, 'description', getComponentsOfDB.elements[i].description, 'description', $(element).val())
                }

            });

            var contents = $(element).find('input#content').each(function(i, element){
                  if (getComponentsOfDB.elements[i] != undefined) {
                    Meteor.call('updateElement', componentId, 'content', getComponentsOfDB.elements[i].content, 'content', $(element).val())
                  }
            });


        });
      }

      this.helpers({
        projects() {
          var projects = Projects.findOne({name: 'NGSN'}, {});
          if(projects) {
            // console.log('projects')
            //
            // console.log(projects)

            return projects;
          }

        },
        components() {

            var components = Components.find({projectId: 'DGhrmhamdng5QKfDj'});

            if(components) {
              // console.log('components')
              // console.log(components)
              return components;
            }

        }


      });




  }

})();
