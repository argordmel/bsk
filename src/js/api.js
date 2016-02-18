define([
    'utils'
],
function (
    utils
) {

    var Api = Backbone.Model.extend({
        defaults: {

        }
    });

    var api = new Api();


    /**
     * Make a HTTP GET request.
     * @param {String} endpoint
     */
    api.get = function (endpoint) {
        return api._send(endpoint, 'GET');
    };


    /**
     * Make a HTTP POST request.
     * @param {String} endpoint
     * @param {Object} params
     */
    api.post = function (endpoint, params) {
        return api._send(endpoint, 'POST', params);
    };

    /**
     * Make a HTTP PUT request.
     * @param {String} endpoint
     * @param {Object} params
     */
    api.put = function (endpoint, params) {
        return api._send(endpoint, 'PUT', params);
    };

    /**
     * Make a HTTP DELETE request.
     * @param {String} endpoint
     * @param {Object} params
     */
    api.destroy = function (endpoint, params) {
        return api._send(endpoint, 'DELETE', params);
    };

    /**
     * Make a HTTP request
     */
    api._send = function(endpoint, type, params) {
        endpoint = utils.ltrim(endpoint, '/');
        return $.ajax({
            url: '/api/v1/'+endpoint,
            async: true,
            dataType: 'json',
            type: type,
            data: (type === 'GET') ? undefined : params
        });
    };

    return api;
});
