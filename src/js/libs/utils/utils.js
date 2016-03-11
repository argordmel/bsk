define(function () {

    /**
     * Utilities
     * @type object
     */
    var utils = {


        // Records for debug
        records: [],

        /**
         * Utility for make debug into a console
         * @param string msg
         * @param object data
         */
        debug: function (msg, data) {
            utils.records.push({
                time: (new Date()).toString(),
                msg: msg,
                data: data
            });
        },

        /**
         * A JavaScript equivalent of PHP’s ltrim
         * @param string str String to make ltrim
         * @param string opt Character to trim
         */
        ltrim: function (str, opt) {
            if (opt) {
                while (str.charAt(0) == opt)
                    str = str.substr(1, str.length - 1);
            } else {
                while (str.charAt(0) == " ")
                    str = str.substr(1, str.length - 1);
            }
            return str;
        },

        /**
         * A JavaScript equivalent of PHP’s rtrim
         * @param string str String to make rtrim
         * @param string opt Character to trim
         */
        rtrim: function (str, opt) {
            if (opt) {
                while (str.charAt(str.length - 1) == opt)
                    str = str.substr(0, str.length - 1);
            } else {
                while (str.charAt(str.length - 1) == " ")
                    str = str.substr(0, str.length - 1);
            }
            return str;
        },

        /**
         * A JavaScript equivalent of PHP’s trim
         * @param string str String to make trim
         * @param string opt Character to trim
         */
        trim: function (str, opt) {
            str = String(str);
            return this.rtrim(this.ltrim(str, opt), opt);
        },

        /**
         * Convert a string to Title Case Format
         * @param string str String
         */
        toTitleCase: function(str)  {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }

    };

    return utils;

});
