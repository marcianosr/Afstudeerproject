import { Meteor } from 'meteor/meteor';
import { Projects } from '../imports/api/projects.js';
import { Components } from '../imports/api/components.js';



Meteor.startup(() => {
  // code to run on server at startup
    // console.log('insert projects')
    // console.log(Projects.find().count())
    // if(Projects.find().count() === 0) {
    //
    //   Projects.insert({
    //
    //       name: 'NGSN',
    //       icon: '/',
    //       development:
    //         [{ version: 0.1, last_updated_at: '13/05/2016', last_updated_by: 'Semir' }],
    //       production:
    //         [{ version: 0.1, last_updated_at: '13/05/2016', last_updated_by: 'Semir' }]
    //
    //   });
    //
    //   Projects.insert({
    //
    //       name: 'Amsterdam ArenA',
    //       icon: '/',
    //       development:
    //         [{ version: 0.1, last_updated_at: '13/05/2016', last_updated_by: 'Toby' }],
    //       production:
    //         [{ version: 0.1, last_updated_at: '13/05/2016', last_updated_by: 'Donald' }]
    //
    //   });
    // }
    //
    // if(Components.find().count() === 0) {
    //
    //     Components.insert({
    //
    //         name: 'Sign up Screen',
    //         projectId: "DGhrmhamdng5QKfDj",
    //         elements: [
    //           { type: 'button', description: 'sign up', content: 'Create account'},
    //           { type: 'small text', description: 'sign up title', content: 'Create an account at NGSN for unlimited soccer!'},
    //
    //         ]
    //
    //     })
    //
    //     Components.insert({
    //
    //         name: 'Login Screen',
    //         projectId: "DGhrmhamdng5QKfDj",
    //         elements: [
    //           { type: 'button', description: 'login', content: 'Login with account'},
    //           { type: 'small text', description: 'login  title', content: 'Login with account at NGSN!'},
    //
    //         ]
    //
    //     })
    //
    //     Components.insert({
    //
    //         name: 'Contact Screen',
    //         projectId: "W7XjpjXmaejaXgrTe",
    //         elements: [
    //           { type: 'button', description: 'contact us', content: 'Contact us'},
    //           { type: 'small text', description: 'email address', content: 'amsterdamarena@arena.nl'},
    //
    //         ]
    //
    //     })
    //
    // }


});
