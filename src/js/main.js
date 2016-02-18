// @NOTE: The js/oauth/ folder scripts are not used in this app as a module.


require.config({

    baseUrl: '',

    // AMD Modules.
    paths: {

        // App
        app: 'src/js/app',
        routers: 'src/js/routers',
        api: 'src/js/api',
        utils: 'src/js/utils/utils',
        seo: 'src/js/utils/seo',

        // Shim libraries
        facebook: 'src/js/oauth/facebook',

        // Libraries.
        jquery: 'bower_components/jquery/dist/jquery.min',
        slick: 'bower_components/slick/dist/slick.min',
        text: 'bower_components/text/text',
        underscore: 'bower_components/underscore/underscore-min',
        Backbone: 'bower_components/backbone/backbone-min'

        // Components.

    },

    // Non-AMD modules.
    shim: {
        facebook: []
    }
    
});

require(['app']);
