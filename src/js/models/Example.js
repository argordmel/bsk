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
        },

        setElements: function() {
            return Api.post('exaple', {parm: 1, param: 2})
            .done(function() {})
            .always(function(){})
            .error(function() {})
        }

    });

    return Example;

});
