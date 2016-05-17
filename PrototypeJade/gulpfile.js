var gulp = require('gulp'),
jade = require('gulp-jade'),
webserver = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src('./src')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('jade', function() {
  gulp.src('./jade/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./src'))
});

gulp.task('watch', function () {
    gulp.watch('jade/*.jade', ['jade']);
})

gulp.task('default', ['server', 'jade', 'watch']);
