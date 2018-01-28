const gulp = require('gulp'),
handlebars = require('gulp-handlebars'),
handlebarsLib = require('handlebars'),
declare = require('gulp-declare'),
concat = require('gulp-concat'),
wrap = require('gulp-wrap');


gulp.task('templates', function(){
  return gulp.src('./app/assets/templates/**/*.hbs')
    .pipe(handlebars({
      handlebars: handlebarsLib
    }))
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'templates',
      noRedeclare: true
    }))
    .pipe(concat('template.js'))
    .pipe(gulp.dest('./app/temp/templates'));
});
