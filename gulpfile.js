'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor');

// Setting up the test task
gulp.task('smoke', function(callback) {
    gulp
        .src(['./specs/*spec.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf.js',
            'debug': false,
            'autoStartStopServer': true,
            'args': ['--grep', '@smoke']
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});


gulp.task('regression', function(callback) {
    gulp
        .src(['./specs/*spec.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'conf.js',
            'debug': false,
            'autoStartStopServer': true,
            'args': ['--grep', '@regression']
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});
