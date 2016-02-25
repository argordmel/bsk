define([
    'utils'
],
function (
    utils
) {

    var seo = {

        setTitle: function(value) {
            document.title  = utils.toTitleCase(value);
            this.setMeta('twitter:title', utils.toTitleCase(value));
            this.setProperty('og:title', utils.toTitleCase(value));
        },

        setDescription: function(value) {
            this.setMeta('description', value);
            this.setMeta('twitter:description', value);
            this.setProperty('og:description', value);
        },

        setKeywords: function(value) {
            this.setMeta('keywords', value);
        },

        setUrl: function(value) {
            this.setProperty('og:url', value);
        },

        setImage: function(value) {
            this.setMeta('twitter:image', value);
            this.setProperty('og:image', value);
        },

        setRobots: function(value) {
            this.setMeta('robots', value);
        },

        setMeta: function(name, value) {
            $('meta[name="'+name+'"]').attr('content', value);
        },

        setProperty: function(name, value) {
            $('meta[property="'+name+'"]').attr('content', value);
        }

    };

    return seo;
});
