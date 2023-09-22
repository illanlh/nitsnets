'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function buildStyles() {
  return gulp.src('./style/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./style'))
    .pipe(browserSync.stream());
};

function watch () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./style/**/*.scss', buildStyles);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);   
}

exports.buildStyles = buildStyles;
exports.watch = watch;
