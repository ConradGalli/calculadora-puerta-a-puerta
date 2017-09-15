/* =====================================================================================
	IMPORT LIBRARIES & DEPENDENCIES
=====================================================================================*/

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var cssMin = require('gulp-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var stripDebug = require('gulp-strip-debug');
var zip = require('gulp-zip');
var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
var rev = require('gulp-rev-mtime');

/* =====================================================================================
	DEVELOPMENT TASKS
=====================================================================================*/

// Agarra todos los *.css ./frontend/css/libs/ y los mergea en un solo archivo ./assets/libs.css
gulp.task('libscss', function(){
	return gulp.src('./frontend/css/**/*.css')
	.pipe(concat('libs.css'))
	.pipe(cssMin())
	.pipe(gulp.dest('./assets/css/'));
});

// Agarra los *.sass/*.scss en /src/sass/ y los compila en un archivo /css/app.css
gulp.task('sass', function() {
	gulp.src('./frontend/sass/**/*.+(scss|sass)')
	.pipe(plumber({
		errorHandler: notify.onError('Error: <%= error.message %>')
	}))
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'})) // compressed
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./assets/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

// Agarra todas las librerias *.js en /src/js/libs y los mergea en un solo archivo /js/libs.js
gulp.task('libsjs', function() {
	gulp.src('./frontend/js/libs/*.js')
	.pipe(plumber({
		errorHandler: notify.onError('Error: <%= error.message %>')
	}))
	.pipe(uglify())
	.pipe(concat('libs.js'))
	.pipe(stripDebug())
	.pipe(gulp.dest('./assets/js'));
});

// Agarra todos los scripts .js custom en /src/js/scripts y los mergea en un archivo js/app.js
gulp.task('scripts', function() {
	gulp.src('./frontend/js/scripts/*.js')
	.pipe(plumber({
		errorHandler: notify.onError('Error: <%= error.message %>')
	}))
	.pipe(uglify())
	.pipe(concat('app.js'))
	.pipe(gulp.dest('./assets/js'));
});

gulp.task('rev', ['sass', 'scripts', 'libscss', 'libsjs'], function () {
	gulp.src('./*.html')
	.pipe(rev({
		'cwd': './',
		'suffix': 'rev',
		'fileTypes': ['css', 'js']
	}))
	.pipe(gulp.dest('.'));
});

/* DO: gulp watch */
gulp.task('watch', ['sass', 'scripts', 'libscss', 'libsjs', 'rev', 'browserSync'], function() {
	gulp.watch('src/frontend/sass/**/*.+(scss|sass)', ['sass'], browserSync.reload);
	gulp.watch('src/frontend/js/**/*.js', ['jshint', 'scripts'], browserSync.reload);
	gulp.watch('src/frontend/css/**/*.css', browserSync.reload);
	gulp.watch('src/assets/css/**/*.css', browserSync.reload);
	gulp.watch('src/*.html', browserSync.reload);
});

/* =====================================================================================
	PRODUCTION TASKS
=====================================================================================*/

gulp.task('img', function(cb) {
		gulp.src(['./assets/img/**/*.png','./assets/img/**/*.jpg','./assets/img/**/*.gif','./assets/img/**/*.jpeg']).pipe(imageop({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true
		})).pipe(gulp.dest('./assets/img')).on('end', cb).on('error', cb);
});

gulp.task('deploy', ['sass', 'scripts', 'libscss', 'libsjs', 'img']);

/* =====================================================================================
	BASIC & OTHER TASKS
=====================================================================================*/

// Revisa y notifica sobre la sintaxis de los scripts que creamos
gulp.task('jshint', function() {
	gulp.src('./frontend/js/scripts/*.js')
	.pipe(plumber({
		errorHandler: notify.onError('Error: <%= error.message %>')
	}))
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

// Recarga el browser cada vez que sucede un cambio
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: ''
		}
	});
});

/* DO: gulp backup */
gulp.task('backup', function() {
	gulp.src(['./assets/css/**/*', './assets/js/**/*'])
	.pipe(zip('css_js--'+(new Date())+'--backup.zip'))
	.pipe(gulp.dest('./backup'));
});
