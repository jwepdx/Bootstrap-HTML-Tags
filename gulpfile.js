var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var projectName = "tags"
var dest = "dist/";
var src = "src/";
var jsFiles = "['src/js/*.js', 'src/js/*/*.js']";
var jsDest = dest + "js";

gulp.task('compile js', function () {
  return gulp.src(['src/js/*/*.js', 'src/js/*.js'])
    .pipe(sourcemaps.init())
    .pipe(concat(projectName + ".js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(jsDest));
});
