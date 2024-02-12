const gulp = require("gulp");

const fileInclude = require("gulp-file-include");

const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const sourceMaps = require("gulp-sourcemaps");
const groupMedia = require("gulp-group-css-media-queries");

const server = require("gulp-server-livereload");

const clean = require("gulp-clean");
const fs = require("fs");

const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const webpack = require("webpack-stream");

gulp.task("html:docs", function() {
    return gulp.src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
        .pipe(plumber({
            errorHandler: notify.onError({
                title: "HTML",
                message: "Error <%= error.message %>",
                sound: false,
            })
        }))
        .pipe(fileInclude({
            prefix: "@@",
            basepath: "@file",
        }))
        .pipe(gulp.dest("./docs/"))
});

gulp.task("scss:docs", function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(plumber({
            errorHandler: notify.onError({
                title: "Styles",
                message: "Error <%= error.message %>",
                sound: false,
            })
        }))
        .pipe(sourceMaps.init())
        .pipe(sassGlob())
        .pipe(groupMedia())
        .pipe(sass())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest("./docs/css/"))
});

gulp.task("images:docs", function() {
    return gulp.src("./src/img/*")
        .pipe(gulp.dest("./docs/img/"))
});

gulp.task("icons:docs", function() {
    return gulp.src("./src/icon/*")
        .pipe(gulp.dest("./docs/icon/"))
});

gulp.task("js:docs", function() {
    return gulp.src("./js/*.js")
        .pipe(webpack(require("./../webpack.config.js")))
        .pipe(gulp.dest("./docs/js"))
});

gulp.task("server:docs", function() {
    return gulp.src("./docs/")
        .pipe(server({
            livereload:true,
            open:true,
        }))
});

gulp.task("clean:docs", function(done) {
    if (fs.existsSync("./../build/")) {
        return gulp.src("./docs/", {read:false})
            .pipe(clean())
    }
    done()
})