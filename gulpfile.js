var gulp = require('gulp');

gulp.task('default', function () {
    // Do soemthing here
    console.log('Hello from Gulpfile.js!')
});

var browserSync = require('browser-sync').create();
browserSync.init({
    server: "./"
});
browserSync.stream();
