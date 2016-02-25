define([
    'backbone',
    'controllers'
],
function (Backbone, Controllers) {

    /**
     * Routes in the website.
     */
    var Routers = Backbone.Router.extend({

        // Controllers
        controllers: {},

        // Initialize
        initialize: function() {

            for ( controller in Controllers ) {
                var cntr = requirejs('./src/js/controllers/src/' + controller);
                console.log(cntr);
            }

            // Your controllers here
            //this.controllers.home   = new HomeController({router: this});


            // PUSHSTATE
            //
            Backbone.history.start({
                pushState: true
            });

        },

        _loadControllers: function(Controllers) {

        }

    });

    return new Routers();

});
