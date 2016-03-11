
require.config({

    baseUrl: '/',

    // AMD Modules.
    paths: {

        // Vendors
        underscore: 'bower_components/underscore/underscore',
        text: 'bower_components/text/text',
        backbone: 'bower_components/backbone/backbone',
        'backbone.controller': 'bower_components/backbone.controller/backbone.controller',

        // App
        app: 'src/js/app',

        // Routers
        routers: 'src/js/_config/routers',

        // Components
        components: 'src/js/_config/components',

        // Controllers
        controllers: 'src/js/_config/controllers',

        // Models
        models: 'src/js/_config/models',

        // Views
        views: 'src/js/_config/views',

        // Libraries.
        jquery: 'bower_components/jquery/dist/jquery',
        whatinput: 'bower_components/foundation-sites/dist/foundation.min',
        foundation: 'bower_components/foundation-sites/dist/foundation.min'

    }

});

require(['app']);
