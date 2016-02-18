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
        gulp.src([config.js])
        .pipe(plugins.requirejs({
            ptimize: 'none',
            wrapShim: true,
            baseUrl: './',
            mainConfigFile: 'src/js/main.js',
            name: 'app',
            out: 'js/app.js'
        }))
        .pipe(plugins.amdclean.gulp({
            removeAllRequires: true
        }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(config.dist+'/js/'));

        /*
        gulp.src([config.js])
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(config.dist+'/js/'));
        */


    };

};
