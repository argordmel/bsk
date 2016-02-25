/***
 * HomeController
 */

define([
    'jquery',
    'underscore',
    'backbone'
],
function ($, _, Backbone) {

    var Home = Backbone.Router.extend({

        routes: {
            'books':                'list',
            'books/search':         'search',
            'books/:id':            'get',
            'books/create':         'create',
            'books/edit/:id':       'edit',
            'books/destroy/:id':    'destroy'
        },

        // Do some init stuff
        initialize: function() {

        },

        // List all elements
        list: function(page, per_page) {

        },

        // Method to search
        search: function(what, page, per_page) {

        },

        // Method to get
        get: function(id) {

        },

        // Method to create
        create: function() {

        },

        // Method to update
        edit: function(id) {
        },

        // Method to destroy
        destroy: function() {

        }

    });

    return Home;

});