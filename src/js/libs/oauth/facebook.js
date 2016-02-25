(function($) {

    $.facebook = {

        // Specify the extended permissions needed to view user data
        // The user will be asked to grant these permissions to the app (so only pick those that are needed)
        permissions: ['email'].join(','),

        // Specify the user fields to query the OpenGraph for.
        // Some values are dependent on the user granting certain permissions
        fields:  ['id', 'name', 'first_name', 'middle_name', 'last_name', 'gender', 'age_range', 'birthday', 'email', 'picture'].join(','),

        load: function() {
             // Load the SDK asynchronously
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/all.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            //Init
            window.fbAsyncInit = function() {

               FB.init({
                   appId: '', // YOUR API KEY
                   cookie: true, // enable cookies to allow the server to access the session
                   xfbml: true  // parse XFBML
               });

            };
        },

        initialize: function(callback) {
            FB.login(function(request) {
                $.facebook.onSignInCallback(request, callback);
            }, {scope: $.facebook.permissions});
        },

        onSignInCallback: function(response, callback) {
            if (response.status === 'connected') {
                // Logged into your app and Facebook
                if(callback !== undefined || callback !== '') {
                    var tmpFn = new Function(callback+'('+JSON.stringify(response)+')');
                    tmpFn();
                }
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
                console.log(response.status);
            } else if (response.status === 'unknown') {
                //The person is not logged into Facebook.
                console.log(response.status);
            } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
                console.log(response.status);
            }
        },

        disconnect: function(result) {
            FB.api('/me/permissions', 'delete', function(response) {
                if(result !== undefined) {
                    result(response);
                }
            });
        },

        /**
         * Gets the currently signed in user's profile data.
         */
        profile: function(result) {
            FB.api('/me', {fields: $.facebook.fields}, function(response) {
                result($.parseJSON(JSON.stringify(response)));
            });
        },

        picture: function(width, height, result) {
            FB.api("/me/picture?width="+width+"&height="+height,  function(response) {
                result(response.data.url);
            });
        },

        share: function(data, callback) {
            FB.ui(data, callback);
        },

        age: function(result) {
            FB.api('/me', {fields: $.facebook.fields}, function(response) {
                result($.parseJSON(JSON.stringify(response.age_range)));
            });
        }


    };

    $.facebook.load();

})(jQuery);