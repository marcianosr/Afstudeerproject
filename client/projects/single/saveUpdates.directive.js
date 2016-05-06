import capitalsPrototype from "../../main.js";
import { Components } from '../../../imports/api/components.js';


(function(){
  angular.module('capitals-prototype')
  .directive('saveUpdates', function($state, SingleProject) {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          $(element).on('click', function(){

                  $state.go('single-project', {}, {reload: true});

                  $('section.new-component').each(function(i, element){

                      scope.newComponentElements = [];

                      $(element).find($('.form-group')).each(function(){

                          console.log($(this))
                          scope.newComponentElementsObj = {};

                            var desc = $(this).find('input#element-description').each(function(i, element){
                              scope.newComponentElementsObj['description'] = $(this).val();
                              console.log(scope.newComponentElementsObj.description)

                            });

                            var content = $(this).find('input#content').each(function(i, element){
                              scope.newComponentElementsObj['content'] = $(this).val();
                            });

                            console.log(desc)
                            if(desc) {
                              scope.newComponentElements.push(scope.newComponentElementsObj);

                            }

                      });
                  });

                  scope.newElementsArr = [];

                  // New elements
                  $('.new-group-elements').each(function(){

                        scope.newElementsObj = {};

                        var id = $(this).closest('section.old-component').attr('componentId')

                        var desc = $(this).find('input#element-description').each(function(){
                          scope.newElementsObj['description'] = $(this).val();
                        });

                        var content = $(this).find('input#content').each(function(){
                          scope.newElementsObj['content'] = $(this).val();
                        });

                        scope.newElementsObj['componentId'] = id;

                        scope.newElementsArr.push(scope.newElementsObj);

                  });


                  // Update old element values
                  $('section.old-component').each(function(i, element) {

                      var componentId = $(element).attr('componentId');

                      var getComponentsOfDB = Components.findOne({projectId: "DGhrmhamdng5QKfDj", _id: componentId }, {});

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

                  SingleProject.saveNewComponent(scope.newComponentElements);
                  SingleProject.saveNewCreatedElements(scope.newElementsArr);

          });

        }
    }
});


})();
