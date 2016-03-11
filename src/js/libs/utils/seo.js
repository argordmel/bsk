define([
    'utils'
],
function (
    utils
) {

    /**
     * Utility for SEO
     * @type object
     */
    var seo = {

        /**
         * Set the document title
         * @param string value
         */
        setTitle: function(value) {
            $(document).attr("title", utils.toTitleCase(value));
            this.setMeta('twitter:title', utils.toTitleCase(value));
            this.setProperty('og:title', utils.toTitleCase(value));
        },

        /**
         * Set the document description
         * @param string value
         */
        setDescription: function(value) {
            this.setMeta('description', value);
            this.setMeta('twitter:description', value);
            this.setProperty('og:description', value);
        },

        /**
         * Set the keywords
         * @param string value
         */
        setKeywords: function(value) {
            this.setMeta('keywords', value);
        },

        /**
         * Set the document url
         * @param string value
         */
        setUrl: function(value) {
            this.setProperty('og:url', value);
        },

        /**
         * Set the image for facebook and twitter
         * @param {type} value
         */
        setImage: function(value) {
            this.setMeta('twitter:image', value);
            this.setProperty('og:image', value);
        },

        /**
         * Set the robots information
         * @param {type} value
         */
        setRobots: function(value) {
            this.setMeta('robots', value);
        },

        /**
         * Set the custom meta tag
         * @param string name Meta name
         * @param string value Meta content
         */
        setMeta: function(name, value) {
            $('meta[name="'+name+'"]').attr('content', value);
        },

        /**
         * Set the custom property tag
         * @param string name Property name
         * @param string value Property content
         */
        setProperty: function(name, value) {
            $('meta[property="'+name+'"]').attr('content', value);
        }

    };

    return seo;
});
