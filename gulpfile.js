'use strict';

/**
 * Imports
 */
var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
var config      = require('./config.json');
var pkg         = require('./package.json');
var requireDir  = require('require-dir');
var tasks       = requireDir('./gulp-tasks');

/**********************************************
 *                  TASKS                     *
 **********************************************/

plugins.livereload.listen();

// Utility for CSS
gulp.task('css', tasks.css(gulp, plugins, config));

// Utility for JS
gulp.task('js', tasks.scripts(gulp, plugins, config));

// Compass
gulp.task('compass', tasks.compass(gulp, plugins, config));

// Watch
gulp.task('watch', tasks.watch(gulp, plugins, config));

// Default
gulp.task('default', ['watch', 'compass', 'js']);
