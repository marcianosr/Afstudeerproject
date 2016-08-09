import { Mongo } from 'meteor/mongo';

export const Components = new Mongo.Collection('components');

if (Meteor.isServer) {

  Meteor.publish('components', function() {
    var components = Components.find({}, {});
    return components;
  });

}

Meteor.methods({

  changeComponentName: function(projectId, componentId, name) {
      Components.update({ projectId: projectId, _id: componentId }, { $set: { name: name }})
  },

  insertComponent: function(projectId, name, elements) {
    console.log('insert new componentss')
    console.log(name)
    console.log(elements)
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

    if (whatElement === "type") {
      var updateComponent = Components.update({  _id: id, "elements": { $elemMatch: { "type": whatValue } }}, { $set: { "elements.$.type": newValue} });
    }

    if (whatElement === "content") {
      var updateComponent = Components.update({  _id: id, "elements": { $elemMatch: { "content": whatValue } }}, { $set: { "elements.$.content": newValue} });
    }
     return updateComponent;
  },

  removeElement: function(projectId, componentId, elements) {
    console.log('remove')
    console.log(elements)
    console.log(projectId)
    Components.update({ projectId: projectId, _id: componentId }, {$pull: { "elements": { "description": elements[0] }}})
  },


})
