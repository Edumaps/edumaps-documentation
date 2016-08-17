/* globals require */

/**
 * Portable Gulp tool that automates repeatable tasks of the development build process.
 */

const gulp = require("gulp"),
        gutil = require("gulp-util"),
        plumber = require("gulp-plumber"),
        notify = require("gulp-notify"),
        jshint = require("gulp-jshint"),
        jscs = require("gulp-jscs"),
        shell = require("gulp-shell"),
        jsonlint = require("gulp-jsonlint"),
        jscsStylish = require("gulp-jscs-stylish"),
        runSequence = require("run-sequence"),
        docs = require("gulp-documentation"),
        eslint = require("gulp-eslint"),
        apidoc = require("gulp-apidoc"),
        browserSync = require("browser-sync"),
        nodemon = require("gulp-nodemon"),
        clean = require('gulp-clean'),
        ignore = require('gulp-ignore'),
        addsrc = require('gulp-add-src'),
        gulpif = require('gulp-if'),
        esdoc = require("gulp-esdoc"),
        sassdoc = require('sassdoc'),
        slate = require('gulp-slate'),
        babel = require('gulp-babel'),


        paths = {
                config: "config",
                src: "src"
        },

        alertError = function(errorMsg) {
                throw new Error(errorMsg);
        };

runLiveDocs = true;






gulp.task("api-docs", function (cb) {
        return gulp.src([
                        paths.src + '/api/index.html.md'
                ])
                .pipe(slate({
                        logo: paths.src + "/api/assets/images/logo.png",
                        scss: paths.src + "/api/assets/styles/custom.scss",
                        style: "solarized-dark"
                }))
                .pipe(gulp.dest('docs/api/'));
});

gulp.task("manual-docs", function (cb) {
        return gulp.src([
                        paths.src + '/manual/index.html.md'
                ])
                .pipe(slate({
                        logo: paths.src + "/manual/assets/images/logo.png",
                        scss: paths.src + "/manual/assets/styles/custom.scss",
                        style: "solarized-dark"
                }))
                .pipe(gulp.dest('docs/manual/'));
});

gulp.task('docs-clean', function(cb) {
        return gulp.src('docs/', {read: false}).pipe(clean());
});

gulp.task("portal-docs", function (cb) {
        return gulp.src([
                        paths.src + '/portal/*',
                        paths.src + '/portal/**/*',
                        paths.src + '/portal/**/**/*'
                ])
                .pipe(gulp.dest('docs/portal/'));
});



gulp.task('build-docs', function(cb) {
        runSequence('docs-clean', 'api-docs', 'manual-docs', 'portal-docs', cb);
});





gulp.task('nodemon', function(cb) {
        var called = false;
        return nodemon({
                script: 'server.js',
                watch: [paths.src + '/**/*.*', paths.src + '/**/**/*.*', paths.src + '/**/**/**/*.*']
        })
        .on('start', function onStart() {
                if (!called) {
                        cb();
                }
                called = true;
        })
        .on('restart', function onRestart() {
                gulp.run("build-docs", function(){
                        setTimeout(function reload() {
                                runLiveDocs = false;
                                browserSync.reload({
                                        stream: false
                                });
                        }, 500);
                });
        });
});

gulp.task('run', ['build-docs', 'nodemon'], function() {
        browserSync.init({
                files: ['docs/**/*.*'],
                proxy: 'http://localhost:' + 8080,
                port: 8081,
                notify: true,
                injectChanges: true
        });
});
