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
//JS Optimization
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

/**
* @function Production task
* @tutorial https://classroom.udacity.com/courses/ud892/lessons/5332430840/concepts/53289406280923
*/
gulp.task('dist', done => {
  'copy-html',
  'copy-images',
  'styles',
  'lint',
  'scripts-dist'
  done();
})

/**
 * @function Default task
 */
gulp.task('default', () => {
  gulp.watch('sass/**/*.scss', gulp.series('styles'));
  browserSync.init({
    server: './'
  });
});

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

/**
 * @function Tests task
 * @tutorial https://classroom.udacity.com/courses/ud892/lessons/5332430839/concepts/53738292280923
 */
gulp.task('tests', done => {
  let filesForTest = ['src/**/*.js', 'tests/spec/**/*Spec.js'];
  return gulp.src(filesForTest)
    .pipe(watch(filesForTest))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}));
  done();
});

/**
* @function scripts
*/
gulp.task('scripts', done => {
  // Load resources.js first so when concat pipes it doesn't create an undefined
  // error
  gulp.src(['src/**/resources.js',
      'src/**/app.js'
    ])
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'));
  done();
});

/**
 * @function scripts-dist
 * @tutorial https://classroom.udacity.com/courses/ud892/lessons/5332430840/concepts/53289406260923
 * @tutorial https://classroom.udacity.com/courses/ud892/lessons/5332430840/concepts/53289406270923
 */
gulp.task('scripts-dist', done => {
  // Load resources.js first so when concat pipes it doesn't create an undefined
  // error
  gulp.src(['src/**/resources.js',
      'src/**/app.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
  done();
});
