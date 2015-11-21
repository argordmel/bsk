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

    'use strict';

    return function () {
        gulp.watch([config.scss+'/**/*.scss'])
        .on('change', function(e) {
            gulp.src(config.scss+'/**/*.scss')
            .pipe(plugins.compass({
                config_file: './config.rb',
                sass: config.scss,
                css: config.css,
                comments: true,
                style: 'compact'
            })).on('error', function(err) {
                console.log("Error: ", err);
            }).pipe(plugins.notify({ message: 'Sass task complete' }));
        });
    };

};