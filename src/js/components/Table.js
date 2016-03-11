/**
 * Example.js
 *
 * @description
 */

define([
    'backbone',
    'underscore',
    'text!src/js/views/home/example.html'
], function(Backbone, _, tplExample) {

    // New component to support Backbone Events
    var Table   = _({}).extend(Backbone.Events);

    Table.on('init', function(data) {
        var container   = $('#app');
        var source      = _.template(tplExample);
        container.html(source({ items: data }));
    });

    // Return component
    return Table;

});
