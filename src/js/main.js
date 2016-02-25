// @NOTE: The js/oauth/ folder scripts are not used in this app as a module.


require.config({

    baseUrl: '/',

    // AMD Modules.
    paths: {

        // App
        app: 'src/js/app',
        routers: 'src/js/config/routers',
        controllers: 'src/js/controllers/all',

        // Libraries.
        jquery: 'bower_components/jquery/dist/jquery',
        whatinput: 'bower_components/foundation-sites/dist/foundation.min',
        foundation: 'bower_components/foundation-sites/dist/foundation.min',
        underscore: 'bower_components/underscore/underscore',
        text: 'bower_components/text/text',
        backbone: 'bower_components/backbone/backbone'

        // Controllers


    }

});

require(['app']);
