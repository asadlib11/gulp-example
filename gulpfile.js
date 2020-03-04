var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function(done) {
    console.log('Hello Zell');
    done();
});

gulp.task('task-name', function () {
    return gulp.src('source-files') // Get source files with gulp.src
      .pipe(aGulpPlugin()) // Sends it through a gulp plugin
      .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
  })

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('app/css'))
});