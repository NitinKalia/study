//// Initialization

var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var purge = require('gulp-css-purge');
var cleanCSS = require('gulp-clean-css');


//// Task Creation
gulp.task('sass', function () {
  return gulp.src('development/styles/**/*.scss')
    .pipe(sass())
    .pipe(concatCss("css.css"))
    .pipe(purge())
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));
});

 
//// Watch


//// Run
gulp.task('default', [ 'sass']);
          