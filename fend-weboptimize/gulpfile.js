var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename')
    imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('images', function(){
    gulp.src('img/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['scripts', 'imagemin']);