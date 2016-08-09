import capitalsPrototype from "../../main.js";
import { Components } from '../../../imports/api/components.js';


(function(){
  angular.module('capitals-prototype')
  .directive('saveUpdates', function() {

    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          $(element).on('click', function(){

                  scope.names = [];

                  $('section.new-component').each(function(i, element){

                      scope.newComponentElements = [];

                      scope.namesObj = {};

                      var names = $(this).find($('.title').find($('h1'))).each(function(i, element){
                        scope.names.push($(element).text())
                        scope.namesObj = $(element).text();
                      });

                      $(element).find($('.form-group')).each(function(){

                          scope.newComponentElementsObj = {};

                            var desc = $(this).find('input#element-description').each(function(i, element){
                              scope.newComponentElementsObj['description'] = $(this).val().toLowerCase().trim();
                            });

                            var type = $(this).find('select#element-type').each(function(i, element){
                              scope.newComponentElementsObj['type'] = $(this).val();
                            });

                            var content = $(this).find('input#content').each(function(i, element){
                              scope.newComponentElementsObj['content'] = $(this).val();
                            });

                            scope.newComponentElements.push(scope.newComponentElementsObj);

                      });

                      scope.newComponentElementsObj['name'] = scope.names[i];


                      scope.single.saveNewComponent(scope.namesObj, scope.newComponentElements);

                  });

                  scope.newElementsArr = [];

                  // New elements
                  $('.new-group-elements').each(function(){

                        scope.newElementsObj = {};

                        var id = $(this).closest('section.old-component').attr('componentId')

                        var desc = $(this).find('input#element-description').each(function(){
                          scope.newElementsObj['description'] = $(this).val().toLowerCase().trim();
                        });

                        var type = $(this).find('select#element-type').each(function(i, element){

                          scope.newElementsObj['type'] = $(this).val();
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

                      var getComponentsOfDB = Components.findOne({projectId: scope.single.projectId, _id: componentId }, {});

                      var descriptions = $(element).find('input#element-description').each(function(i, element){

                          if (getComponentsOfDB.elements[i] != undefined) {

                                Meteor.call('updateElement', componentId, 'description', getComponentsOfDB.elements[i].description, 'description', $(element).val().toLowerCase().trim())
                          }
                      });

                      var types = $(element).find('select#element-type').each(function(i, element){

                          if (getComponentsOfDB.elements[i] != undefined) {

                                Meteor.call('updateElement', componentId, 'type', getComponentsOfDB.elements[i].type, 'type', $(element).val())
                          }
                      });

                      var contents = $(element).find('input#content').each(function(i, element){

                          if (getComponentsOfDB.elements[i] != undefined) {
                                Meteor.call('updateElement', componentId, 'content', getComponentsOfDB.elements[i].content, 'content', $(element).val())
                          }
                      });
                  });

                  console.log(scope.newElementsArr)
                  scope.single.saveNewCreatedElements(scope.newElementsArr);

          });

        }
    }
});


})();
