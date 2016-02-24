define([
    'utils',
    'seo',
    'api'
],
function (
    utils,
    seo,
    api
) {

    /**
     * Change the page animatedly.
     * @param  {String} page - The page class to change to.
     */
    var changePage = function (page) {

        // Scroll to the top
        $(window).scrollTop(0);

        switch (page) {
            // Custom source for each page
            default: '';
        }

    };


    /**
     * Routes in the website.
     */
    var Routers = Backbone.Router.extend({

        // Routes
        routes: {
            ''                              : 'home',
            '/'                             : 'home'
        },

        // HOME PAGE
        home: function() {
            var _this   = this;
        },

        // NOT FOUND PAGE
        notFound: function () {
            var _this   = this;
            _this.navigate('404', {trigger: true});
        }

    });

    var routers = new Routers();

    return routers;

});
