/**
 * Gulp Sass task
 * Generates the css compiled file from the SASS source files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @param  {boolean} prod  Build to production
 * @return {function} Gulp task
 *
 * @example gulp sass
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config, prod) {

    'use strict';

    return function () {

        gulp.watch([config.sass+'/**/*.scss'])
        .on('change',function (event) {

            console.log('File ' + event.path + ' was ' + event.type);

            return gulp.src([config.sass+'/**/*.scss'])
            .pipe(plugins.sass({
                includePaths: config.sassPaths,
                outputStyle: (prod) ? 'compressed' : 'compact',
                sourceComments: 'normal'
            }))
            .on('error', plugins.sass.logError)
            .pipe(plugins.autoprefixer(config.browsers))
            .pipe(gulp.dest(config.dist+'/css'));

        });

    };

};