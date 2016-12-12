const gulp         = require('gulp')
const plumber      = require('gulp-plumber')
const notify       = require('gulp-notify')
const sass         = require('gulp-sass')
const minify       = require('gulp-minify')
const sourcemaps   = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const rename       = require('gulp-rename')
const imagemin     = require('gulp-imagemin')
const connect      = require('gulp-connect')



let config = {
    'root': 'dist/',
    'src' : 'src/',
    'dist': 'dist/assets/'
}


gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        livereload: true
    })
})

gulp.task('sass', function () {
    return gulp.src(config.src + 'scss/*.scss')
        .pipe(plumber({errorHandler: notify.onError('SASS Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(function (path) {
            path.basename += ".min"
        }))
        .pipe(gulp.dest(config.dist + 'css'))
        .pipe(connect.reload())
        .pipe(notify('SASS compiled: <%= file.relative %>'))
})

gulp.task('javascript', function() {
    return gulp.src(config.src + 'js/*.js')
        .pipe(plumber({errorHandler: notify.onError("JS Error: <%= error.message %>")}))
        .pipe(minify({
            ext:{
                src:'.js',
                min:'.min.js'
          },
          ignoreFiles: ['.min.js'],
          noSource: true
        }))
        .pipe(gulp.dest(config.dist + 'js'))
        .pipe(connect.reload())
        .pipe(notify('JS compiled: <%= file.relative %>'))
})

gulp.task('images', function() {
    return gulp.src(config.src + 'img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist + 'img'))
        .pipe(connect.reload())
        .pipe(notify('Images minified!'))
})

gulp.task('html', function () {
    return gulp.src(config.root + '*.html')
        .pipe(connect.reload())
})

gulp.task('watch', function() {
    gulp.watch(config.src + 'scss/**/*.scss', ['sass'])
    gulp.watch(config.src + 'js/*.js', ['javascript'])
    gulp.watch(config.root + '*.html', ['html'])
})


gulp.task('default', ['connect', 'watch'], function() {

})
