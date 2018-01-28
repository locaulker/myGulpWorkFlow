const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', ['images', 'templates', 'styles', 'scripts'], function(){

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  
  watch('./app/index.html', function(){
    browserSync.reload();
  });

  watch('./app/assets/images/**/*.{png,jpeg,jpg,svg,gif}', function(){
    browserSync.reload();
  });

  watch('./app/assets/templates/**/*.hbs', function(){
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.scss', function(){
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function(){
    gulp.start('scriptsRefresh');
  });

});


gulp.task('cssInject',['styles'], function(){
  return gulp.src('./app/temp/css/bundle.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
  browserSync.reload();
});