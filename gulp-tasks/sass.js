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

        gulp.watch([config.sassFiles])
        .on('change',function (event) {
            console.log('File ' + event.path + ' was ' + event.type);
            return gulp.src([config.sassFiles])
            .pipe(
                plugins.sass({
                    includePaths: config.sassPaths,
                    outputStyle: 'compact',
                    sourceComments: 'normal'
                })
                .on('error', plugins.sass.logError))
            .pipe(plugins.autoprefixer({
                browsers: ['last 2 versions', 'ie >= 9']
            }))
            .pipe(gulp.dest(config.dist+'/css'));
        });

    };

};