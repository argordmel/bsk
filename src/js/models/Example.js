/**
 * Example.js
 *
 * @description
 */

define([
    'backbone',
    'underscore'
], function(Backbone, _) {

    var Example = Backbone.Model.extend({

        defaults: {

        },

        // Method constuctor
        initialize: function() {

        },

        getElements: function() {
            return ['red', 'blue', 'orange', 'black', 'white', 'yellow'];
        }

    });

    return Example;

});
