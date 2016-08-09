import { Mongo } from 'meteor/mongo';

export const SlackUsers = new Mongo.Collection('slackUsers');


if (Meteor.isServer) {

  Meteor.publish('slackUsers', function() {
    var slackUsers = SlackUsers.find({}, {});
    return slackUsers;
  });

}
