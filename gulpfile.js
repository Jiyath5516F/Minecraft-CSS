const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const safeParser = require('postcss-safe-parser');

gulp.task('styles', function() {
  const plugins = [
    cssnano({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: false
      }]
    })
  ];

  return gulp.src('src/**/*.css')
    .pipe(concat('minecraft-css-framework-v-1.0.0.css'))
    .pipe(postcss(plugins, { parser: safeParser }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('styles'));
