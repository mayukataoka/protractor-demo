'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor');

// Setting up the test task
gulp.task('protractor', function(callback) {
    gulp
        .src(['todo_spec.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf.js',
            'debug': false,
            'autoStartStopServer': true
            //'args': ['--baseUrl', ']

        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});
