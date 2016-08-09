import { SlackUsers } from '../imports/api/slackUsers.js';

Meteor.methods({

    insertUser: function(username, image_url, access_token, team_id, user_id) {

        console.log('insert user')
        console.log(access_token, team_id, user_id)
        SlackUsers.insert({ username: username, image_url: image_url, access_token: access_token, team_id: team_id, user_id: user_id })

    },
});
