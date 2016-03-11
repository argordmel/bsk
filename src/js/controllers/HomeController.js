/**
 * HomeController
 *
 * @description
 */

define([
    'backbone',
    'underscore',
    'models',
    'views',
    'backbone.controller'
],
function (Backbone, _, Models, Views, Controller) {

    var HomeController  = Backbone.Controller.extend({

        routes: {
            'books':                'list',
            'books/:id':            'get',
            'books/search':         'search',
            'books/create':         'create',
            'books/edit/:id':       'edit',
            'books/destroy/:id':    'destroy'
        },

        // Do some init stuff
        initialize: function() {
            console.log('Initialize Controller');
        },

        // List all elements
        list: function(page, per_page) {

            // Instance of model
            var example = new Models.Example;

            // Get data
            var data    = example.getElements();

            // Render view
            Views.render('Table', data);

        },

        // Method to search
        search: function(what, page, per_page) {
            console.log('Search Controller');
        },

        // Method to get
        get: function(id) {
            console.log('Get Controller');
        },

        // Method to create
        create: function() {
            console.log('Create Controller');
        },

        // Method to update
        edit: function(id) {
            console.log('Edit Controller');
        },

        // Method to destroy
        destroy: function() {
            console.log('Destroy Controller');
        }

    });

    return HomeController;

});