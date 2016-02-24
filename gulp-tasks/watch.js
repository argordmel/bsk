/**
 * Gulp Watch task
 * Watch for changed files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @param  {boolean} prod  Build to production
 * @return {function} Gulp task
 *
 * @example gulp watch
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config, prod) {

    'use strict';

    return function () {
        // Listen
        plugins.livereload.listen();
        // Paths
        var paths   = [config.dist+'/**/*.css', config.dist+'/**/*.js', config.views];
        // Watch
        gulp.watch(paths, function(event) {
            gulp.src(event.path)
            .pipe(plugins.livereload())
            .pipe(plugins.notify({ message: 'Watch: Changes detected' }));
        });
    };

};