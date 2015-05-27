// Load Node Modules/Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var minifyCSS = require('gulp-minify-css');
// var browsersync = require('browser-sync');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');


// Asset paths
var paths = {
  sass: ['exercise-03/scss/*.scss'],
  css:  ['exercise-03/css/'],
};


// task css also starts task 'compass' as well (probably synchronous)
gulp.task('sass', function() {
    gulp.src('exercise-03/scss/main.scss')
        // .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('exercise-03/css'))
        .pipe(notify({ message: 'Sass complete' }));
});



// concat gulp task
gulp.task('concatenate', function() {
    return gulp.src('exercise-03/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('exercise-03/js/dist'))
        .pipe(notify({ message: 'Concatenate task complete' }));
});


// Watch Task
gulp.task('watch', function() {
    // watch scss files
    gulp.watch(paths.sass, ['sass']);

    // Watch .js files
    gulp.watch('exercise-03/js/*.js', ['concatenate']);
});


// Default Task
gulp.task('default', ['watch']);





// production tasks

// gulp.task('production-css', function(){
//     return gulp.src('campusinterview/sass/*.scss')
//         .pipe(plumber({
//             errorHandler: onError
//         }))
//         .pipe(compass({
//             style: 'compressed',
//             comments: false,    // no effect ?!
//             css: 'campusinterview/stylesheets',
//             sass: 'campusinterview/sass',
//         }))
//         .pipe(minifyCSS())      //minifying removes line comments as well
//         .pipe(gulp.dest('testcampusinterview/system/templates/frontend/default/css/production'))
//         .pipe(notify({ message: 'Compass production task complete' }));
// });

// gulp.task('production-js', function() {
//     return gulp.src('testcampusinterview/system/templates/frontend/default/js/all.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('testcampusinterview/system/templates/frontend/default/js/production'))
//         .pipe(notify({ message: 'uglify js task complete' }));
// });

// gulp.task('production', ['production-js', 'production-css']);
