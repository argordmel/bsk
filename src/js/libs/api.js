define([
    'utils'
],
function (
    utils
) {

    /**
     * Utility for make request
     * @type object
     */
    var Api =  {

        /**
         * Make a HTTP GET request.
         * @param {String} endpoint
         */
        get: function (endpoint) {
           return this._send(endpoint, 'GET');
        },

        /**
         * Make a HTTP POST request.
         * @param {String} endpoint
         * @param {Object} params
        */
        post: function (endpoint, params) {
            return this._send(endpoint, 'POST', params);
        },

        /**
         * Make a HTTP PUT request.
         * @param {String} endpoint
         * @param {Object} params
         */
        put: function (endpoint, params) {
            return this._send(endpoint, 'PUT', params);
        },

        /**
         * Make a HTTP DELETE request.
         * @param {String} endpoint
         * @param {Object} params
         */
        destroy: function (endpoint, params) {
            return this._send(endpoint, 'DELETE', params);
        },

        /**
         * Make a HTTP request
         */
        _send: function(endpoint, type, params) {
            endpoint = utils.ltrim(endpoint, '/');
            return $.ajax({
                url: '/api/v1/'+endpoint,
                async: true,
                dataType: 'json',
                type: type,
                data: (type === 'GET') ? null : params
            });
        }

    };

    return Api;
});
