// Load in gulp devDependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Minify task - gulp minify
gulp.task('minify', function() {
  gulp.src('src/contra.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('javascripts'))
});
