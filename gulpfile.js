

// Include gulp
var gulp = require('gulp');  

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var serve = require('gulp-serve');

// var ngInject = require("./index");

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(livereload());
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Adding ng inject to main gulp file

// gulp.task("default", function() {

//     var options = {
//         name: "ng-inject",
//         modules: ['ui.router']
//     };

//     return gulp.src('testing/app/src/**/*.js')
//         .pipe(ngInject("ng-inject.js", options))
//         .pipe(gulp.dest("dist/"))
// });








// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('serve', serve(''));

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'serve']);

