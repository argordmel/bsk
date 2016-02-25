/**
 * Gulp JS task
 * Watch for changed files
 *
 * @param  {Gulp} gulp
 * @param  {Object} plugins Available gulp plugins
 * @param  {Object} config  Configuration options
 * @param  {boolean} prod  Build to production
 * @return {function} Gulp task
 *
 * @example gulp clean
 * @see gulpfile.js
 */
module.exports = function (gulp, plugins, config, prod) {

    'use strict';

    return function () {

        gulp.watch([config.js, config.templates])
        .on('change',function (event) {
            console.log('File ' + event.path + ' was ' + event.type);
            // If is a controller
            if(/(_controller\.js)/.test(event.path)) {
                console.log("Building controllers");
                var controllerOpts =  {
                    inputFolder: config.app+'/js/controllers/src/',
                    appendThisToDependencies: config.app+'/js/controllers/',
                    appendThisToReturnedItems: '',
                    eliminateSharedFolder: true,     //will drop 'all' from the front of all return items
                    output: config.app+'/js/controllers/all.js'
                };
                // Require all controllers
                plugins.grm(controllerOpts);
            } else {
                var requirejs   = plugins.requirejs({
                    optimize: 'none',
                    wrapShim: true,
                    baseUrl: './',
                    mainConfigFile: 'src/js/main.js',
                    name: 'app',
                    out: 'dist/js/app.js'
                });
                requirejs.pipe(plugins.amdclean.gulp({
                    removeAllRequires: true
                }));
                if(prod) {
                    requirejs.pipe(plugins.guglify());
                }
                requirejs.pipe(gulp.dest('./'));
            }

        });

    };

};
