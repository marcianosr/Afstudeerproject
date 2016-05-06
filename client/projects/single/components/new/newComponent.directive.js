import capitalsPrototype from "../../../../main.js";

(function(){
  angular.module('capitals-prototype')
  .directive('newComponent', newComponent);

  function newComponent(SingleProject) {
      return {
          templateUrl: 'client/projects/single/components/new/newComponent.html',
          restrict: 'E',
          replace:true,
          scope: {
            index: "@"
          },
          controller: 'SingleProject',
          controllerAs: 'single',
          // controller: 'SingleProject',
          link: function(scope, elements, attrs) {

            var allComponents = $("section.components").find('section.component').length;


            scope.$watch(allComponents, function () {

                  // find the last component and place a new component after the last one
                  // set the index attribute with the new length of all the components on the screen
                  $("section.components").find('section.component').last().after(elements);
                  $("section.components").find('section.component').last().attr('index', allComponents)
                  $("section.components").find('section.component').last().attr('component-name', 'Nameless Component')

                  // elements is the scope of the directive
                  elements.find($('.new-element')).find('button.new-element-button').click(function(){
                      var index = $(this).closest('section.component').attr('index');
                      scope.single.createNewElement(index)

                  });

            });


            // $('.save-project').on('click', function(){
            //
            //     console.log('click from new Component')
            //     $(elements).each(function(i, element){
            //
            //         scope.newElementsArr = [];
            //
            //         $(element).find($('.form-group')).each(function(){
            //
            //             scope.newElementsObj = {};
            //
            //               var desc = $(this).find('input#element-description').each(function(i, element){
            //                 scope.newElementsObj['description'] = $(this).val();
            //               });
            //
            //               var content = $(this).find('input#content').each(function(i, element){
            //                 scope.newElementsObj['content'] = $(this).val();
            //               });
            //
            //               scope.newElementsArr.push(scope.newElementsObj);
            //
            //         });
            //
            //           console.log('create new component in directive')
            //     });
            //
            //     // scope.single.saveNewComponent(scope.newElementsArr);
            //
            //     SingleProject.saveNewComponent(scope.newElementsArr);
            // });

          },

      }
  }

})();


                //   $('section.new-component').each(function(i, element){
                //
                //     var that = this;
                //
                //     this.newElementsArr = [];
                //
                //     $(this).find($('.form-group')).each(function(){
                //
                //           var self = this;
                //
                //           this.newElementsObj = {};
                //
                //           var desc = $(this).find('input#element-description').each(function(){
                //             self.newElementsObj['description'] = $(this).val();
                //           });
                //
                //           var content = $(this).find('input#content').each(function(){
                //             self.newElementsObj['content'] = $(this).val();
                //           });
                //
                //           console.log(this.newElementsObj);
                //
                //           that.newElementsArr.push(this.newElementsObj);
                //
                //     });
                //
                //       console.log('createnew component');
                //
                //       SingleProject.saveNewComponent(this.newElementsArr);
                //
                // });
