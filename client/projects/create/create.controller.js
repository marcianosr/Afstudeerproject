import capitalsPrototype from "../../main.js";
import { Projects } from '../../../imports/api/projects.js';

(function(){

    angular.module('capitals-prototype')
    .controller('CreateProject', ['$scope', '$location', '$reactive', __CreateProject]);



    function __CreateProject($scope, $location, $reactive){
        console.log('init CreateProject');

        $reactive(this).attach($scope);

        console.log(this)

        this.pristine = true;
        this.selectedLanguages = [];

        this.languages = [
          {
             name: 'Dutch',
             short_name: "NL",
             image: "/assets/Flags_PNG/Dutch.png"
          },
          {
             name: 'English',
             short_name: "EN",
             image: "/assets/Flags_PNG/English.png"
          },
          {
             name: 'French',
             short_name: "FR",
             image: "/assets/Flags_PNG/French.png"
          },
          {
             name: 'Spanish',
             short_name: "ESP",
             image: "/assets/Flags_PNG/Spanish.png"
          },
       ]



        // this.languagesChecked = 0;

        this.sanitize = function(name) {

            var sanitizedName = this.slugify(name).toLowerCase().trim();
            return sanitizedName;

        }
        this.slugify = function(slug) {

            return slug.split(" ").join("-");
        }

        this.getSelectedLanguage = function(languages) {

          console.log('language');

          var self = this;

          for (lang in languages.language) {
              // console.log(lang)

              if (languages.language[lang]) {
                  console.log(lang + 'is selected');
                  self.selectedLanguages.push(lang)
              }
              else {
                  console.log(lang + 'is deselected');
                  var languagesArr = self.selectedLanguages.indexOf(lang);
                  self.selectedLanguages.splice(languagesArr, 1);
              }


          }


        }


        this.createNewProject = function(form, project) {


          console.log(this.selectedLanguages)

            console.log('%c create new project', 'background: #DB4251; color: white;');
            // console.log(project)
            // console.log(this)

            if (form && this.selectedLanguages.length) {
                console.log('%c Project created!', 'background: #00C943; color: white;');


                var slug = this.sanitize(project.name)
                console.log(slug)
                // console.log(project))
                Meteor.call('insertProject', project.name, slug, this.selectedLanguages);
                $location.path('/single-project/' + slug)
            }
            else {

                this.errors = [];

                if(this.selectedLanguages.length == 0) {
                    this.errors.push("Please select a language for your project.")
                    console.log(this.errors)
                }

                if (project.name.length == 0) {
                    this.errors.push("A project name is required.")
                }
                return false;
            }






        }


    }

})();
