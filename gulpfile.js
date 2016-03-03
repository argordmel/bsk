'use strict';

/**
 * Imports
 */
var gulp        = require('gulp');
var plugins     = require('gulp-load-plugins')();
plugins.guglify = require('gulp-uglify');
plugins.rsass   = require('gulp-ruby-sass');
plugins.grm     = require('requirejs-metagen');
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
gulp.task('scripts', tasks.scripts(gulp, plugins, config));
gulp.task('scripts:prod', tasks.scripts(gulp, plugins, config, true));

// Compass
gulp.task('compass', tasks.compass(gulp, plugins, config));
gulp.task('compass:prod', tasks.compass(gulp, plugins, config, true));

// Sass
gulp.task('sass', tasks.sass(gulp, plugins, config));
gulp.task('sass:prod', tasks.sass(gulp, plugins, config, true));

// Ruby Sass
gulp.task('rsass', tasks.rsass(gulp, plugins, config));
gulp.task('rsass:prod', tasks.rsass(gulp, plugins, config, true));

// Watch
gulp.task('watch', tasks.watch(gulp, plugins, config));
gulp.task('watch:prod', ['watch', 'compass:prod', 'scripts:prod']);

// Default
gulp.task('default', ['watch', 'compass', 'scripts']);
