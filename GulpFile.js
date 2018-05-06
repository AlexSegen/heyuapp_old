var gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  livereload = require('gulp-livereload'),
	  autoprefixer = require('gulp-autoprefixer');


gulp.task('sass',() => {
	gulp.src('assets/sass/core.scss')
		.pipe(sass({
			outputStyle: 'compact', //nested, expanded, compact, compressed
			sourceComments:false //true, false
		})) //Plugin
		.pipe(autoprefixer({
			versions:['last 2 browsers']
		}))
		.pipe(gulp.dest('assets/css/'))
		.pipe(livereload());
});




gulp.task('html', function () {
    gulp.src([
        'index.html'
    ]).pipe(livereload());
});




gulp.task('change', function () {

    livereload.listen();

    gulp.watch([
        'index.html'
    ], ['html']);


});

gulp.task('default', ['sass', 'html','change']);


/*
gulp.task('default',() => {
	gulp.watch('assets/sass/*.scss', ['sass','html','change']);
});*/