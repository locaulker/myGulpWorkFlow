const gulp = require('gulp'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
merge = require('merge-stream'),
concat = require('gulp-concat');


// Compile and merge CSS files
gulp.task('styles', function(){

  var m1_faCSS = gulp.src('node_modules/font-awesome/css/font-awesome.css');
  var m2_bsCSS = gulp.src('node_modules/bootstrap/dist/css/bootstrap.css');
  var m3_customSCSS = gulp.src('./app/assets/styles/**/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))

    return merge(m1_faCSS, m2_bsCSS, m3_customSCSS)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./app/temp/css'));
});


// Move Font-Awesome fonts to app/assets folder
gulp.task('fa-fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('./app/temp/fonts'));
});