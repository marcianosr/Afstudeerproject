// import capitalsPrototype from "../../main.js";
import headRoom from 'headroom.js';

(function(){



  angular.module('capitals-prototype')
  .directive('headroom', function(){
      return {
          restrict: 'A',
          link: function(scope, elements) {
            // grab an element
            var myElement = document.querySelector(".main-header");
            // construct an instance of Headroom, passing the element
            var headroom  = new headRoom(myElement, {
                  "offset": 205,
                  "tolerance": 5,
                  "classes": {
                    "initial": "animated",
                    "pinned": "slideDown",
                    "unpinned": "slideUp"
                  },
                  onNotTop: function() {
                      $(myElement).find($('.meta-data')).addClass('col-xs-offset-1 col-xs-10 col-xs-offset-1');
                      // $(myElement).find($('.language-container')).addClass('col-xs-offset-1 col-xs-10 col-xs-offset-1');
                  },

                  onTop:function() {
                      $(myElement).find($('.meta-data')).removeClass('col-xs-offset-1 col-xs-10 col-xs-offset-1');
                      // $(myElement).find($('.language-container')).removeClass('col-xs-offset-1 col-xs-10 col-xs-offset-1');

                  }

                });

            // initialise
            headroom.init();


          }

      }

  });

})();
