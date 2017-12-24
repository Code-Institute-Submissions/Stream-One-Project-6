const gulp=require('gulp');
const concat=require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del=require('del');
const runSequence=require('run-sequence');

// >Clean
gulp.task('clean',function(){
  return del(['dev-build']);
});

// >Dev
gulp.task('dev',function(){
  // >>Build index.html
  gulp.src(['src/header.html', 'src/body.html', 'src/footer.html'])
  .pipe(concat('index.html'))
  .pipe(gulp.dest('dev-build'));

  // >>MainStyleSheet
  gulp.src('src/static/scss/main.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('dev-build/static/css'));
  

  // >>Build app
  gulp.src('src/app/**')
  .pipe(gulp.dest('dev-build/app'));

  // >>Gather jQuery
  gulp.src('node_modules/jquery/dist/jquery.js')
  .pipe(gulp.dest('dev-build/static/lib/js'));

  // >>Gather Boostrap
  gulp.src('node_modules/bootstrap/dist/**/*')
  .pipe(gulp.dest('dev-build/static/lib'));

  // >>Gather Angular
  gulp.src(['node_modules/angular/angular.js', 'node_modules/angular-route/angular-route.js'])
  .pipe(gulp.dest('dev-build/static/lib/js'));
});

// >dev-build
gulp.task('dev-build',function(cb){
  runSequence('clean',['dev'],cb);
});

// >Watch
gulp.task('watch',function()
{
  // >>dev
  gulp.watch('src/**',['dev']);
});

gulp.task('default',['dev']);