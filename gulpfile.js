/**
 * Dependancies
 */
var gulp =       require('gulp');
var sass =       require('gulp-sass');
var jade =       require('gulp-jade');
var browserify = require('gulp-browserify');

/**
 * Template data.
 * @type {exports}
 */
var data = require('./data.json');

/**
 * Javascript
 */
gulp.task('scripts', function() {
    gulp.src('./_js/*.js')
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(gulp.dest('./build/js'))
});

/**
 * CSS
 */
gulp.task('css', function () {
    gulp.src('./_scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('templates', function() {
    var YOUR_LOCALS = data;

    gulp.src('./_templates/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('./'))
});

/**
 * Default
 */
gulp.task('default', ['templates','scripts','css']);