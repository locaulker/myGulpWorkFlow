const gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
imageminPngquant = require('imagemin-pngquant'),
imageminJpegRecompress = require('imagemin-jpeg-recompress'),
del = require('del');



gulp.task('deleteDistFolder', function(){
  return del("./dist");
});

gulp.task('optimizedImages', ['deleteDistFolder'], function(){
  return gulp.src([
    './app/assets/images/**/*',
    '!./app/assets/images/icons',
    '!./app/assets/images/icons/**/*'
    ])
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.jpegtran(),
      imagemin.optipng(),
      imagemin.svgo(),
      imageminPngquant(),
      imageminJpegRecompress()
      ]))
    .pipe(gulp.dest("./dist/assets/images"));
});


gulp.task('build', ['deleteDistFolder', 'optimizedImages']);