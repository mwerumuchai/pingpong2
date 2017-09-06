var del = require('del');

var gulp = require('gulp');
var utilities = require('gulp-util');

/*gulp.task('myTask', function() {
  console.log('hello gulp');
});*/

var concat = require('gulp-concat');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var uglify = require('gulp-uglify');

var buildProduction = utilities.env.production;


//browserify
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

//gulp-concat to consolidate multiple files .. concatenation: process of consolidating multiple js files into one
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('concatInterface', function() {
  return gulp.src(['./js/pingpong-interface.js', './js/signup-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

//clean task
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

//build tasks
gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
