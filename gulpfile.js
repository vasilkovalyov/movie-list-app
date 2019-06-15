var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb')
sourcemaps = require('gulp-sourcemaps');


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

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('image', function() {
    return gulp.src('app/images/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images'));
})

gulp.task('default', ['browser-sync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'image', 'sass'], function() {
    var buildCss = gulp.src(['app/css/main.css'])
        .pipe(gulp.dest('dist/css'));
    var buildFonts = gulp.src(['app/fonts/**/*'])
        .pipe(gulp.dest('dist/fonts'));
    var buildJs = gulp.src(['app/js/**/*'])
        .pipe(gulp.dest('dist/js'));
    var buildHtml = gulp.src(['app/*.html'])
        .pipe(gulp.dest('dist'));
    var buildImage = gulp.src(['app/images/**/*'])
        .pipe(gulp.dest('dist/images'));
});