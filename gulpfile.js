'use strict';

/**
 * Imports
 */
var gulp	= require('gulp');
var plugins	= require('gulp-load-plugins')();
var config	= require('./config.json');
var pkg		= require('./package.json');
var requireDir  = require('require-dir');
var tasks       = requireDir('./gulp-tasks');

/**********************************************
 *                  TASKS                     *
 **********************************************/

plugins.livereload.listen();

//Reload CSS
gulp.task('css', tasks.css(gulp, plugins, config));

//Compass
gulp.task('compass', tasks.compass(gulp, plugins, config));

//Watch files
gulp.task('watch', tasks.watch(gulp, plugins, config));