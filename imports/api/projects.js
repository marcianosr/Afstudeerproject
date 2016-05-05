import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');

// console.log('server api')
// console.log(Projects.find().fetch())
// console.log('server api')

// Meteor.methods({
//
//   // getSingleProject: function () {
//   //    var data = Projects.findOne({name: 'NGSN'})
//   //    console.log(data)
//   //    return data;
//   // }
//
// })
