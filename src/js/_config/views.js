define([
    'components'
],
function (Components) {

    var Views = {

        render: function(component, data) {
            Components[component].trigger('init', data);
        }

    };

    return Views;
});
