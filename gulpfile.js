var gulp=require('gulp');

gulp.task("all",function(){
	gulp.src("src/**/*")
	.pipe(gulp.dest('E:\\php\\WWW\\baihuaguan\\src'));
});


gulp.task("jsfile",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest('E:\\php\\WWW\\baihuaguan\\js'));
});

gulp.task("htmlfile",function(){
	gulp.src("html/*")
	.pipe(gulp.dest('E:\\php\\WWW\\baihuaguan\\html'));
});

gulp.task("watch",function(){
	gulp.watch("src/**/*",["all"]);
});