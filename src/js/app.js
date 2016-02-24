define([
    'jquery',
    'underscore',
    'Backbone',
    'utils',
    'seo',
    'routers',
    'api'
],
function (
    jquery,
    underscore,
    Backbone,
    utils,
    seo,
    routers,
    api
) {

    //
    // GENERAL
    //

    // Public API
    window.app = {
        VERSION: '0.1',
        routers: routers,
        api: api,
        utils: utils,
        seo: seo
    };

    //
    // DOM
    //

    // Links to internal pages
    $('body')
    .on('click', 'a.link-pushstate', function (e) {
        e.preventDefault();

        var link    = $(this).attr('href');
        var target  = $(this).attr('target');

        if (target !== 'blank') {
            routers.navigate(link, {trigger: true});
        }

        return false;
    });

    //
    // ROUTER
    //

    routers.on('route', function (route) {
        switch (route) {
            default: '';
        }
    });

    //
    // PUSHSTATE
    //

    Backbone.history.start({
        pushState: true
    });

    //
    // GOOGLE ANALYTICS HERE
    //

});
