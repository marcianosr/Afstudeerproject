import { Mongo } from 'meteor/mongo';

export const Components = new Mongo.Collection('components');

Meteor.methods({
  getComponents: function(){
    var components = Components.find({}, {});
    console.log('components')
    return components;
  },

  insertComponent: function(projectId, name, elements) {
    console.log('insert new componentss')
    Components.insert({ projectId: projectId, name: name, elements: elements})
  },

  insertElement: function(data) {

    _.each(data, function(data, i){

      // console.log(data)
      Components.update({ _id: data.componentId}, { $push: { 'elements': data }})

    });
  },

  updateElement: function(id, whatElement, whatValue, newElement, newValue){
    // console.log('update')

    if (whatElement === "description") {
      var updateComponent = Components.update({  _id: id, "elements": { $elemMatch: { "description": whatValue } }}, { $set: { "elements.$.description": newValue} });
    }

    if (whatElement === "content") {
      var updateComponent = Components.update({  _id: id, "elements": { $elemMatch: { "content": whatValue } }}, { $set: { "elements.$.content": newValue} });
    }
     return updateComponent;
  },

  removeElement: function(projectId, componentId, elements) {
    console.log('remove')
    console.log(elements)
    Components.update({ projectId: projectId, _id: componentId }, {$pull: { "elements": { "description": elements[0] }}})
  },


})
