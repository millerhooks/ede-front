var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var rimraf = require('gulp-rimraf');
var rename = require("gulp-rename");
var nodemon = require('gulp-nodemon');
var order = require("gulp-order");
var flatten = require('gulp-flatten');
var inject = require("gulp-inject");
var _ = require("lodash");
var html2js = require("gulp-ng-html2js");
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var ngConstant = require('gulp-ng-constant');

var pkg = require('./package.json');

gulp.task('copy-build', [
    'copy-assets',
    'copy-data',
    'copy-vendor-js',
    'copy-app-js',
    'copy-vendor-fonts',
    'config-build',
    'index'])

gulp.task('copy-index', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/'));
})

gulp.task('copy-assets', function () {
    return gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./build/assets'));
})

gulp.task('copy-data', function () {
    return gulp.src('./data/**/*.json')
        .pipe(gulp.dest('./build/assets/data'));
})

gulp.task('copy-app-js', function () {
    return gulp.src([ 'src/**/*.js', '!src/**/*.spec.js', '!src/modules/**/*.js' ])
        .pipe(gulp.dest('./build/app'));
})

gulp.task('copy-vendor-js', function () {
    var vendorCommon = [
         //'jquery/dist/jquery.js',
         //'bootstrap/js/**/*.js',
         'modernizr/modernizr.js',
         'bootstrap-sass/dist/js/*.min.js',
         'jquery-placeholder/jquery.placeholder.js',
         'tbasse-jquery-truncate/jquery.truncate.min.js',
         'off-canvas/js/overthrow.js',
         'off-canvas/js/hammer.js',
         'off-canvas/js/jquery.hammer.js',
         'off-canvas/js/jquery.offcanvas.min.js',
         'angular-ui-calendar/**/*.js',
         'lodash/dist/lodash.min.js',
         'async/lib/*.js',
         'ngActiveResource/dist/*.js',
         'active-support/lib/active-support.js',
    ];

    return gulp.src(vendorCommon
//        [
//        'jquery/dist/jquery.js',
//        'bootstrap/js/**/*.js',
////      'fullcalendar/**/*.js',
//        'angular-ui-calendar/**/*.js'
//        ]
        , {cwd: 'vendor/**'})
        .pipe(order(vendorCommon

//            [
//            'jquery/jquery.js',
//            'bootstrap/js/**/*.js',
////      'fullcalendar/**/*.js',
//            'angular-ui-calendar/**/*.js'
//            ]
        ))
        .pipe(gulp.dest('./build/vendor'));
})

gulp.task('config-build', function () {
    return gulp.src('src/config/config-build.json')
        .pipe(ngConstant({
            name: 'edepo.config.constants'
        }))
        // Writes config.js to dist/ folder
        .pipe(rename('config.js'))
        .pipe(gulp.dest('build/app/common'));
});

gulp.task('config-compile', function () {
    return gulp.src('src/config/config-compile.json')
        .pipe(ngConstant({
            name: 'edepo.config.constants'
        }))
        .pipe(rename('config.js'))
        .pipe(gulp.dest('build/app/common'));
});

gulp.task('copy-vendor-fonts', function () {
    return gulp.src([
        'components-font-awesome/font/**/*.*',
        'bootstrap/fonts/*.*'
    ], {cwd: 'vendor/**'})
        .pipe(flatten())
        .pipe(gulp.dest('./build/assets/fonts'));
})

gulp.task('sass', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./build/assets/css'));
});


gulp.task('serve', function () {
    nodemon({ script: 'server/server.js', watch: 'server/' })
        .on('restart', function () {
            console.log('restarted!')
        })
});

gulp.task('watch', function () {
    watch({glob: 'src/sass/**/*.scss'}, function () {
        gulp.start(['sass', 'index']);
    });
    watch({glob: 'src/index.html'}, function () {
        gulp.start(['index']);
    });
    watch({glob: 'src/**/*.js'}, function () {
        gulp.start(['copy-app-js', 'index']);
    });
    watch({glob: 'src/app/**/*.tpl.html'}, function () {
        gulp.start(['html2js', 'index']);
    });
});

gulp.task('clean', function () {
    return gulp.src('./build', {read: false})
        .pipe(rimraf({ force: true }));
});

gulp.task('build', function (callback) {
    runSequence('clean',
        'sass',
        'copy-build',
        'html2js',
        'index',
        callback);
})

gulp.task('default', function (callback) {
    runSequence('build',
        'watch',
        'serve',
        callback);
});

gulp.task('html2js', function () {
    return gulp.src([ 'src/app/**/*.tpl.html' ])
        .pipe(html2js({
            moduleName: "templates-app"
        }))
        .pipe(concat('templates-app.js'))
        .pipe(gulp.dest("./build/app"));
})

gulp.task('index', function () {
    return gulp.src('./src/index.html')
        .pipe(inject(gulp.src([
            "./build/vendor/**/*.js",
            "./build/app/**/*.js",
            "./build/css/**/*.css"
        ], {read: false}), {
            ignorePath: 'build',
            sort: function (a, b) {
                var index,
                    a_filename = _.last(a.filepath.split('/')),
                    b_filename = _.last(b.filepath.split('/')),
                    aIndex = 0, bIndex = 0, fileName;

                //bit of a hack to get proper ordering on the vendor files
                if (a.filepath.indexOf('vendor') > -1 && b.filepath.indexOf('vendor') > -1) {
                    _.each([], function (file, fileIndex) {
                        fileName = _.last(file.split('/'));
                        if (a_filename === fileName) {
                            aIndex = fileIndex;
                        }
                        if (b_filename === fileName) {
                            bIndex = fileIndex;
                        }
                        index = aIndex - bIndex
                    });
                }

                return index || b.filepath.localeCompare(a.filepath);
            }
        }))
        .pipe(gulp.dest("./build"));
});



