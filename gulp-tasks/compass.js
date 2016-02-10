/**
 * Gulp Compass task
 * Generates the css compiled file from the SASS source files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp compass
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {

    return function () {

        gulp.src(config.scss)
        .pipe(plugins.compass({
            task: 'watch',
            config_file: './config.rb',
            style: 'compact',
            comments: true,
            sass: config.scss,
            css: config.dist+'/css'
        })).on('error', function(err) {
            console.log("Error: ", err);
        });

    };

};