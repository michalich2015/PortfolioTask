var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('sass',function(){
	gulp.src('./project/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./project'));
})

gulp.task('sass:watch',function(){
	gulp.watch('./project/**/*.scss',['sass']);
});