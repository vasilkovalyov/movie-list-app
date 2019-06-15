'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    sourcemaps = require('gulp-sourcemaps');


/* compile scss to css */
gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(csscomb())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

/* reload js code */
gulp.task('scripts', function() {
    return gulp.src('app/js/jquery.main.js')
        .pipe(browserSync.reload({ stream: true }))
});


/* reload js html page */
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

/* local server */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "index.html",
            directory: true
        }
    });
});


gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/jquery.main.js', gulp.parallel('scripts'));
});

gulp.task('start', gulp.parallel('browser-sync', 'sass', 'watch'));