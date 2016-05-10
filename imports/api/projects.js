import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');


if(Meteor.isServer) {
  Meteor.publish('projects', function() {
    var projects = Projects.find({}, {});
    return projects;
  });

}
