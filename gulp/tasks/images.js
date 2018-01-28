const gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
imageminPngquant = require('imagemin-pngquant'),
imageminJpegRecompress = require('imagemin-jpeg-recompress');



gulp.task('images', function(){
  return gulp.src('./app/assets/images/**/*.{png,jpeg,jpg,svg,gif}')
    .pipe(imagemin([
      imagemin.gifsicle(),
      imagemin.jpegtran(),
      imagemin.optipng(),
      imagemin.svgo(),
      imageminPngquant(),
      imageminJpegRecompress()
    ]))
    .pipe(gulp.dest('./app/temp/images'));
});