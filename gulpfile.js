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

  // >>Build app
  gulp.src('src/app/**')
  .pipe(gulp.dest('dev-build/app'));

  // >>Gather jQuery
  gulp.src('node_modules/jquery/dist/jquery.js')
  .pipe(gulp.dest('dev-build/static/js/'));

  // >>Gather Boostrap
  gulp.src('node_modules/bootstrap/dist/**/*')
  .pipe(gulp.dest('dev-build/static'));

  // >>Gather Angular
  gulp.src(['node_modules/angular/angular.js', 'node_modules/angular-route/angular-route.js'])
  .pipe(gulp.dest('dev-build/static/lib/js/'));
});

// >dev-build
gulp.task('dev-build',function(cb){
  runSequence('clean',['dev'],cb);
});

gulp.task('default',['dev']);