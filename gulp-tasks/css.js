/**
 * Gulp CSS task
 * Watch for changed files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @return {function} Gulp task
 *
 * @example gulp clean
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config) {

    'use strict';

    return function () {
        gulp.watch([config.css+'/**/*.css'], function(event) {
            gulp.src(event.path)
            .pipe(plugins.livereload());
        });
    };

};
