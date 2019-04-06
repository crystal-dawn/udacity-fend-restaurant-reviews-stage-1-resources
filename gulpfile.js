const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/**,
*@description Default task
*/
gulp.task('default', done => {
  // TODO: add watch task for scss files

  browserSync.init({
    server: './'
  })
  done();
})

/**
*@description Styles task
*/
gulp.task('styles', done => {
  gulp
  .src('index.html')
  .pipe(browserSync.stream())
  done();
})
