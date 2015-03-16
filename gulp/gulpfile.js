/*
 *  Gulp build for Magento EE
 *  Details in README
 */

// Dependencies
// ------------
var gulp = require('gulp');

var autoprefixer    = require('gulp-autoprefixer'),
    browsersync     = require('browser-sync'),
    filter          = require('gulp-filter'),
    notify          = require('gulp-notify'),
    plumber         = require('gulp-plumber'),
    sass            = require('gulp-ruby-sass'),
    sourcemaps      = require('gulp-sourcemaps');

// Configuration
// -------------

// Local development url
var devURL = 'local.magento-boilerplate.com';

// File paths
var src     = '../skin/frontend/PACKAGE/THEME/src',
    dest    = '../skin/frontend/PACKAGE/THEME';

// Supported browsers
var browserSupport = {
    browsers: [
        'last 2 version',
        'safari 5',
        'ie 8',
        'ie 9',
        'ios 6',
        'android 4'
    ]
}

// Sourcemaps
var inline = '',
    external = './';

// Styles task
// -----------
gulp.task('styles', function() {
    // Compile
    return sass(src + '/scss', {
        noCache: true,
        sourcemap: true,
        style: 'compressed'
    })

    // Error handling
    .on('error', function(err) {
        notify.onError({
            title: 'Error!',
            message: '<%= error.message %>',
            sound: 'Beep'
        })(err);
        this.emit('end');
    })

   // Vendor prefixes
    .pipe(autoprefixer( browserSupport ))

    // Update sourcemaps after autoprefixer
    .pipe(sourcemaps.write( inline ))
    .pipe(gulp.dest(dest + '/css'))

    // CSS Injection
    .pipe(filter('**/*.css'))
    .pipe(browsersync.reload({ stream:true }))

    // Notification
    .pipe(notify({ message: 'Styles task complete' }));
});

// BrowserSync task
// ----------------
gulp.task('browsersync', function() {
    browsersync({
        notify: false,
        proxy: devURL
    });
});

// Default task
// ------------
gulp.task('default', ['styles']);

// Watch task
// ----------
gulp.task('watch', function() {
    gulp.watch(src + '/scss/**/*.scss', ['styles']);
});

// Bsync task (BrowserSync)
// ------------------------
gulp.task('bsync', ['browsersync'], function() {
    gulp.watch(src + '/scss/**/*.scss', ['styles']);
});