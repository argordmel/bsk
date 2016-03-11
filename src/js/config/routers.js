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

            // Load all controllers
            for ( controller in Controllers ) {
                this.controllers[controller] = new Controllers[controller]({router: this});
            }

            // PUSHSTATE
            //
            Backbone.history.start({
                //pushState: true
            });

        }

    });

    return new Routers();

});
