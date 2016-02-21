/**
 * Gulp JS task
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

        gulp.watch([config.js, config.templates])
        .on('change',function (event) {
            console.log('File ' + event.path + ' was ' + event.type);
            gulp.src([config.js, config.templates])
            plugins.requirejs({
                optimize: 'none',
                wrapShim: true,
                baseUrl: './',
                mainConfigFile: 'src/js/main.js',
                name: 'app',
                out: 'dist/js/app.js'
            })
            .pipe(plugins.amdclean.gulp({
                removeAllRequires: true
            }))
            .pipe(plugins.guglify())
            .pipe(gulp.dest('./'));
        });

    };

};
