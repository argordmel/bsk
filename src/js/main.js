
require.config({

    baseUrl: '/',

    // AMD Modules.
    paths: {

        // App
        app: 'src/js/app',
        routers: 'src/js/config/routers',

        // Libraries.
        jquery: 'bower_components/jquery/dist/jquery',
        whatinput: 'bower_components/foundation-sites/dist/foundation.min',
        foundation: 'bower_components/foundation-sites/dist/foundation.min',
        underscore: 'bower_components/underscore/underscore',
        text: 'bower_components/text/text',
        backbone: 'bower_components/backbone/backbone',
        'backbone.controller': 'bower_components/backbone.controller/backbone.controller',

        // Controllers
        controllers: 'src/js/config/controllers',

        // Models
        models: 'src/js/config/models'

    }

});

require(['app']);
