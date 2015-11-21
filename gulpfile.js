'use strict';

var gulp	= require('gulp');
var plugins	= require('gulp-load-plugins')();
var config	= require('./config.json');
var pkg		= require('./package.json');
var tasks       = requireDir('./gulp-tasks');

/**********************************************
 *                  TASKS                     *
 **********************************************/
gulp.task('watch', ['compass'], gulp.watch(gulp, plugins, config));