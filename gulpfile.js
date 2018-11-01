const gulp=require('gulp');
const concat=require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del=require('del');
const runSequence=require('run-sequence');
const uglify = require('gulp-uglify');
const htmlmini = require("gulp-html-minify");
const ngAnnotate = require('gulp-ng-annotate');

// >Clean
gulp.task('clean-dev',function(){
  return del(['dev-build']);
});
gulp.task('clean-pro',function(){
  return del(['build']);
});
gulp.task('clean-doc',function(){
  return del(['docs']);
});

// >Dev
gulp.task('dev',function(){

  // >>MOCK CONTENT
  gulp.src('src/content/client/**/*')
  .pipe(gulp.dest('dev-build/content'));

  gulp.src('src/content/social/*')
  .pipe(gulp.dest('dev-build/content/social'));

  // >>Build index.html
  gulp.src(['src/dev-index/header.html', 
            'src/body.html', 
            'src/dev-index/footer.html'])
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
  gulp.src('src/data/client/**')
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

// >Pro
gulp.task('pro',function(){

  // >>CONTENT
  gulp.src('src/content/client/**/*')
  .pipe(gulp.dest('build/content'));

  gulp.src('src/content/social/*')
  .pipe(gulp.dest('build/content/social'));

  // >>Build index.html
  gulp.src(['src/pro-index/header.html', 
            'src/body.html', 
            'src/pro-index/footer.html'])
  .pipe(concat('index.html'))
  .pipe(gulp.dest('build'));

  // >>MainStyleSheet
  gulp.src('src/static/scss/main.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('build/static/css'));
  
  // >>MainJS
  gulp.src('src/static/js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/static/js'));

  // >>Build app
  gulp.src(["src/app/logic/**/app.js",
            "src/app/logic/**/route.js",
            "src/app/logic/**/controller.js",
            "src/app/logic/**/directive.js",
            "src/app/logic/factory.js"])
      .pipe(concat('app.bundle.js'))
      .pipe(gulp.dest('build/app/logic/'));

  gulp.src('src/app/template/*.html')
  .pipe(htmlmini())
  .pipe(gulp.dest('build/app/template'));

   // >>Copy Data
  gulp.src('src/data/client/**')
  .pipe(gulp.dest('build/data'));

  // >>Gather jQuery
  gulp.src('node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('build/static/lib/js'));

  // >>Gather Boostrap
  gulp.src(['node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css'])
  .pipe(gulp.dest('build/static/lib/css'));

  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
  .pipe(gulp.dest('build/static/lib/js'));

  gulp.src('node_modules/bootstrap/dist/fonts/**/*')
  .pipe(gulp.dest('build/static/lib/fonts'));

  // >>Gather Angular
  gulp.src(['node_modules/angular/angular.min.js', 
            'node_modules/angular-route/angular-route.min.js'])
  .pipe(gulp.dest('build/static/lib/js'));

  // >>DateTime Picker
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.css')
  .pipe(gulp.dest('build/static/lib/css'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker-ltie9.min.css')
  .pipe(gulp.dest('build/static/lib/css'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker_iOS_fix.js')
  .pipe(gulp.dest('build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.js')
  .pipe(gulp.dest('build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker-ltie9.min.js')
  .pipe(gulp.dest('build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/i18n/DateTimePicker-i18n.js')
  .pipe(gulp.dest('build/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.css')
  .pipe(gulp.dest('build/static/lib/css'));
});

// >Doc
gulp.task('doc',function(){

  // >>CONTENT
  gulp.src('src/content/client/**/*')
  .pipe(gulp.dest('docs/content'));

  gulp.src('src/content/social/*')
  .pipe(gulp.dest('docs/content/social'));

  // >>Build index.html
  gulp.src(['src/doc-index/header.html', 
            'src/body.html', 
            'src/doc-index/footer.html'])
  .pipe(concat('index.html'))
  .pipe(gulp.dest('docs'));

  // >>MainStyleSheet
  gulp.src('src/static/scss/main.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('docs/static/css'));
  
  // >>MainJS
  gulp.src('src/static/js/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('docs/static/js'));

  // >>Build app
  gulp.src(["src/app/logic/**/app.js",
            "src/app/logic/**/route.js",
            "src/app/logic/**/controller.js",
            "src/app/logic/**/directive.js",
            "src/app/logic/factory.js"])
      .pipe(concat('app.bundle.js'))
      .pipe(gulp.dest('docs/app/logic/'));

  gulp.src('src/app/template/*.html')
  .pipe(htmlmini())
  .pipe(gulp.dest('docs/app/template'));

   // >>Copy Data
  gulp.src('src/data/client/**')
  .pipe(gulp.dest('docs/data'));

  // >>Gather jQuery
  gulp.src('node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('docs/static/lib/js'));

  // >>Gather Boostrap
  gulp.src(['node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/bootstrap/dist/css/bootstrap.min.css'])
  .pipe(gulp.dest('docs/static/lib/css'));

  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
  .pipe(gulp.dest('docs/static/lib/js'));

  gulp.src('node_modules/bootstrap/dist/fonts/**/*')
  .pipe(gulp.dest('docs/static/lib/fonts'));

  // >>Gather Angular
  gulp.src(['node_modules/angular/angular.min.js', 
            'node_modules/angular-route/angular-route.min.js'])
  .pipe(gulp.dest('docs/static/lib/js'));

  // >>DateTime Picker
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.css')
  .pipe(gulp.dest('docs/static/lib/css'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker-ltie9.min.css')
  .pipe(gulp.dest('docs/static/lib/css'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker_iOS_fix.js')
  .pipe(gulp.dest('docs/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.js')
  .pipe(gulp.dest('docs/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker-ltie9.min.js')
  .pipe(gulp.dest('docs/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/i18n/DateTimePicker-i18n.js')
  .pipe(gulp.dest('docs/static/lib/js'));
  gulp.src('node_modules/datetimepicker/dist/DateTimePicker.min.css')
  .pipe(gulp.dest('docs/static/lib/css'));
});

// >dev-build
gulp.task('dev-build',function(cb){
  runSequence('clean-dev',['dev'],cb);
});

// >doc-build
gulp.task('doc-build',function(cb){
  runSequence('clean-doc',['doc'],cb);
});

// >build
gulp.task('build',function(cb){
  runSequence('clean-pro',['pro'],cb);
});

gulp.task('default',['dev-build']);