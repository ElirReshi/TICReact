var gulp = require('gulp'),
webserver = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('default', ['server']);
