const gulp=require('gulp');
const concat=require('gulp-concat');
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

  // >>Gather Angular
  gulp.src('node_modules/angular/angular.js')
  .pipe(gulp.dest('dev-build/static/lib/js/'));
  gulp.src('node_modules/angular-route/angular-route.js')
  .pipe(gulp.dest('dev-build/static/lib/js/'));
});

// >dev-build
gulp.task('dev-build',function(cb){
  runSequence('clean',['dev'],cb);
});

gulp.task('default',['dev']);