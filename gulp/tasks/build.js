var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();



gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});


/* clean the dist folder so our files be updated with our changes everytime we run build task  */
gulp.task('cleanDistFolder', function() {
  return del("./docs");
});


gulp.task('compressImages', ['cleanDistFolder'], function() {
  return gulp.src('./app/assets/images/**/*')
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/images'));
});


/*give every css or js file with any changes a brand new code name to force browser to use it instead of the older ones and compress their sizes*/
gulp.task('usemin', ['cleanDistFolder', 'styles', 'scripts'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});


gulp.task('copyGeneralFiles', ['cleanDistFolder'], function() {
  var pathsToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});


gulp.task('build', ['cleanDistFolder', 'copyGeneralFiles', 'compressImages', 'usemin'])
    
  