/**
 * @file Udacity Web Tooling and Automation Course (subcourse for FEND)
 * @see Login to Classroom for links to work
 * @tutorial https://classroom.udacity.com/courses/ud892
 */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
//CSS Optimization
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
/**
*@description Default task
*/
gulp.task('default', done => {
  gulp.watch('sass/**/*.scss', gulp.series('styles'));
  browserSync.init({
    server: './'
  })
  done();
})

/**
 * @function Styles task
 * @description Create sass and auto-prefix for 2 most recent browser versions
 * @tutorial https://classroom.udacity.com/courses/ud892/lessons/5332430837/concepts/53252207850923
 * @tutorial https://classroom.udacity.com/courses/ud892/lessons/5332430837/concepts/53252207860923
 * @tutorial https://classroom.udacity.com/courses/ud892/lessons/5332430838/concepts/55096392250923
 */
gulp.task('styles', done => {
  gulp
    .src("sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
  done();
});
