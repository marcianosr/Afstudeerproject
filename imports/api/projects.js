import { Mongo } from 'meteor/mongo';

export const Projects = new Mongo.Collection('projects');


if(Meteor.isServer) {
  Meteor.publish('projects', function() {
    var projects = Projects.find({}, {});
    return projects;
  });

}

Meteor.methods({

  'insertProject': function(name, slug, languages) {
      Projects.insert({ name: name, icon: '/',
        development: [{
          version:0.1, last_updated_at: 'Not updated yet', last_updated_by: 'Nobody yet'
        }],
        production: [{
          version:0.1, last_updated_at: 'Not updated yet', last_updated_by: 'Nobody yet'
        }],
        slug: slug,
        languages: languages
      });


  },

  // 'updateProject': function(id, who) {
  //     Projects.update({ _id: id, version: 0.2, last_updated_by: who })
  // }
})
