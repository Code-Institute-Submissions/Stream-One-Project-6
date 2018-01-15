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
  
  // >>MainJS
  gulp.src('src/static/js/main.js')
  .pipe(gulp.dest('dev-build/static/js'));

  // >>Build app
  gulp.src('src/app/**')
  .pipe(gulp.dest('dev-build/app'));

   // >>Copy Data
  gulp.src('src/data/**')
  .pipe(gulp.dest('dev-build/data'));

  // >>Gather jQuery
  gulp.src('node_modules/jquery/dist/jquery.js')
  .pipe(gulp.dest('dev-build/static/lib/js'));

  // >>Gather Boostrap
  gulp.src('node_modules/bootstrap/dist/**/*')
  .pipe(gulp.dest('dev-build/static/lib'));

  // >>Gather Angular
  gulp.src(['node_modules/angular/angular.js', 'node_modules/angular-route/angular-route.js'])
  .pipe(gulp.dest('dev-build/static/lib/js'));

  // >>DateTime Picker
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.css')
  .pipe(gulp.dest('dev-build/static/lib/css'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker-ltie9.min.css')
  .pipe(gulp.dest('dev-build/static/lib/css'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker_iOS_fix.js')
  .pipe(gulp.dest('dev-build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.js')
  .pipe(gulp.dest('dev-build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker-ltie9.min.js')
  .pipe(gulp.dest('dev-build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/i18n/DateTimePicker-i18n.js')
  .pipe(gulp.dest('dev-build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.css')
  .pipe(gulp.dest('dev-build/static/lib/css'));
});

// >dev-build
gulp.task('dev-build',function(cb){
  runSequence('clean',['dev'],cb);
});

// >Watch
gulp.task('watch',function()
{
  // >>dev
  gulp.watch('src/**',['dev-build']);
});

gulp.task('default',['dev']);