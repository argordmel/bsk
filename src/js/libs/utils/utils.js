define(function () {

    var utils = {

        records: [],

        debug: function (msg, data) {
            utils.records.push({
                time: (new Date()).toString(),
                msg: msg,
                data: data
            });
        },

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

        trim: function (str, opt) {
            str = String(str);
            return this.rtrim(this.ltrim(str, opt), opt);
        },

        toTitleCase: function(str)  {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
        
    };

    return utils;
});
