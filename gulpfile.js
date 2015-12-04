/**
* gulp plugins
*
*/
    var gulp    = require('gulp'),
        del     = require('del')
        rename  = require('gulp-rename');

    // GULP-PLUGINS: Tests
    // In package.json, not used in gulp

    // GULP-PLUGINS: CSS
    var sass         = require('gulp-sass'),
        sourcemaps   = require('gulp-sourcemaps'),
        minifycss    = require('gulp-minify-css'),
        critical     = require('critical'),
        postcss      = require('gulp-postcss'),
        autoprefixer = require('autoprefixer'), // Auto prefix properties when needed
        oldie = require('oldie')({
            rgba: {
                filter: true
            },
            rem: {
                replace: false
            },
            unmq: {
                disable: false
            },
            unroot: {
                disable: true
            },
            unnot: {
                disable: true
            },
            pixrem: {
                disable: true
            }
        }), // Fallback for some IE8 properties
        will_change  = require('postcss-will-change'), // Add graphic capability (rendering layer) for older browser
        cssstats     = require('postcss-cssstats'), // Create stats for css
        processors   = [
                will_change,
                autoprefixer({
                    browsers: 'last 2 versions, safari >= 9, ie >= 8'
                })
            ],
        bless = require('gulp-bless');  // Split css file in multiple files for IE<10 when needed

    // GULP-PLUGINS: Images
    var imagemin = require('gulp-imagemin'),
        cache    = require('gulp-cache'),
        gulpif   = require('gulp-if'),
        sprite   = require('sprity');

    // GULP-PLUGINS: JS
    var jshint      = require('gulp-jshint'),
        uglify      = require('gulp-uglify'),
        concat      = require('gulp-concat'),
        browserify  = require('browserify');
        gbrowserify  = require('gulp-browserify');


    // GULP-PLUGINS: Doc
    var exec = require('gulp-exec'); // => to exec command line jsdoc

    // GULP-PLUGINS: HTML
    var nunjucksRender = require('gulp-nunjucks-render'),
        minifyHTML     = require('gulp-minify-html');

    // GULP-PLUGINS: Data - template
    var data = require('gulp-data'),
        path = require('path'); // Use to get the specific data for partials context

    // GULP-PLUGINS: Server
    var browserSync = require('browser-sync'),
        reload      = browserSync.reload;


    var paths = {
        site       : {
            source : ["./sources/to_build_pages/*.html"] ,
            destination : "./build/"
        },
        styleguide : {
            source : [] ,
            destination : "./build/styleguide"
        },
        sass       : {
            source : ["./sources/styles/style.scss"] ,
            destination : "./build/styles"
        },
        js         : {
            source : [] ,
            destination : "./build/scripts"
        },
        images     : {
            source : [] ,
            destination : "./build/images"
        },
        data       : {
            source : ["./sources/data/data.json"] ,
            destination : "./build/data"
        }
    };

/**
* Nunjucks setup
*
*/
    nunjucksRender.nunjucks.configure('sources/patternlab/');
    // nunjucksRender({
    //     css_path: 'http://company.com/css/'}
    // );
    // <link rel="stylesheet" href="{{ css_path }}test.css" />
    // would render:
    // <link rel="stylesheet" href="http://company.com/css/test.css" />



// gulp.task('', function(){});



/**
* images
*
*/
    // ui-icons => generate sprite-image, generate sass mixin
    // flags    => generate sprite-image, generate sass mixin
    // favicons => optimize and move
    // generate sprite.png and _sprite.scss
    // gulp.task('sprites', function () {
    //   return sprity.src({
    //     src: './src/images/**/*.{png,jpg}',
    //     style: './sprite.css',
    //     // ... other optional options
    //     // for example if you want to generate scss instead of css
    //     processor: 'sass', // make sure you have installed sprity-sass
    //   })
    //   .pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./dist/css/')))
    // });



/**
* site
*
*/
    // html => {atoms, molecules, organisms}/{{elementName}}.html, /!\ create data.json => use template engine
    gulp.task('html', function() {
        // Gets .html and .nunjucks files in pages
        return gulp.src( paths.site.source )
            // use data.json
            .pipe(data(function() {
                return require( paths.data.source )
            }))
            // page-specific json
            .pipe(data(function(file) {
                var fileName = path.basename(file.path);
                fileName = fileName.substr(0, fileName.lastIndexOf('.'));
                if( path.dirname(file.path) + fileName + '.json' ){
                    return require( path.dirname(file.path) + fileName + '.json');
                }else{
                    return;
                }
            }))
            // Renders template with nunjucks
            .pipe(nunjucksRender())
            .pipe(minifyHTML({
                conditionals: true
            }))
            .pipe(rename({dirname: ''}))
            // output files in app folder
            .pipe(gulp.dest( paths.site.dest ));
    });

    // sass => {atoms, molecules, organisms}/{{elementName}}.scss /!\ order and inheritance, optimization criticalCss?
    // Example for gulp-bless:
    // gulp.task('css', function() {
    //     gulp.src('style.css')
    //         .pipe(bless())
    //         .pipe(gulp.dest('./splitCSS'));
    // });

    gulp.task('styles', function() {
        return gulp.src( path.sass.source )
            .pipe(sourcemaps.init())
            .pipe(sass({
                style: 'expanded',
                errLogToConsole: true
            }))
            .pipe(postcss(processors))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(minifycss())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest( path.sass.destination ));
    });

    // js   => browserify modules in main.js, jshint main.js, move third-party, generate polyfill
    //         [ browserify, jshint, third-party, polyfill ]

    gulp.task('lint-js', function() {
      return gulp.src('./sources/scripts/modules/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
    });

    gulp.task('browserify-js', function () {
        return gulp.src(['sources/scripts/main.js'])
        .pipe(gbrowserify())
        .pipe(gulp.dest('build/scripts'));
    });

    // Scripts
    gulp.task('scripts', ['browserify-js'], function() {

        gulp.src('sources/scripts/thirdparty/modernizr.min.js')
            .pipe(gulp.dest('build/scripts'));

        return gulp.src(['build/scripts/main.js'])
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('build/scripts'));
    });

/**
* styleguide
*
*/
    // html => {atoms, molecules, organisms}/sg/{{elementName}}.html
    // sass => same as site + sg-style layout
    // js   => basic dom navigation?



/**
* doc => jsdoc
*
*/
    gulp.task('doc', function() {
        del(['./build/documentation/*.html']);

        var options = {
            continueOnError: false,       // default = false, true means don't emit error event
            pipeStdout: false,            // default = false, true means stdout is written to file.contents
            customTemplatingThing: "test" // content passed to gutil.template()
        };
        var reportOptions = {
            err: true,    // default = true, false means don't write err
            stderr: true, // default = true, false means don't write stderr
            stdout: true  // default = true, false means don't write stdout
        }

        gulp.src('./sources/scripts/modules/*.js', {read: false})
            .pipe(exec('./node_modules/.bin/jsdoc -c ./node_modules/jsdoc/conf.json ./sources/scripts/modules -r -d ./build/documentation', options))
            .pipe(exec.reporter(reportOptions));
    });



/**
* test npm test != gulp /!\
*
*/
    // html => nunjucks specific
    gulp.task('html-test', function() {
        nunjucksRender.nunjucks.configure('./sources/scripts/modules/');
        // Gets .html and .nunjucks files in sources/scripts
        return gulp.src('sources/scripts/modules/**/test/*.html')
            // Renders template with nunjucks
            .pipe(nunjucksRender())
            .pipe(rename(function (path) {
                var testLess = path.dirname.replace(/\/test/i, '');
                path.dirname = testLess;
            }))
            // output files in app folder
            .pipe(gulp.dest('build/reports/tests'));
    });

    // sass => cssstats

    gulp.task('browserify-test', function () {

        return gulp.src(['sources/scripts/modules/**/test/*.js'])
        .pipe(gbrowserify())
        .pipe(rename(function (path) {
            var modulesLess = path.dirname.replace(/\/modules/i, '');
            var testLess = modulesLess.replace(/\/test/i, '');
            path.dirname = testLess;
        }))
        .pipe(gulp.dest('build/reports/tests'));
    });

/**
* clean
*
*/



/**
* serve
*
*/

    // Serve  test report
    gulp.task('serveTest', ['html-test', 'browserify'],  function(){
        // Move Mocha from node to build for browser testing
        gulp.src('./node_modules/mocha/mocha.js')
            .pipe(gulp.dest('build/reports/tests/scripts'));
        gulp.src('./node_modules/mocha/mocha.css')
            .pipe(gulp.dest('build/reports/tests/styles'));

        browserSync({
            server: {
                baseDir: 'build/reports/tests/'
            },
            port: 8080
        });
    });

    // Serve  test report
    gulp.task('serveCoverage', function(){
        browserSync({
            server: {
                baseDir: 'build/reports/coverage/'
            },
            port: 8888
        });
    });

    // Serve  test report
    gulp.task('serve', function(){
        browserSync({
            server: {
                baseDir: 'build/'
            },
            port: 8000
        });
    });

/**
* watch
*
*/



/**
* default
*
*/
    // Build HTML
    // Build css
    // Build js
    // Serve
    // Watch changes

    gulp.task('default', function() {
        // gulp.start('html-test', 'browserify', 'serveTest');
        // gulp.start('styles', 'scripts', 'polyfill', 'images', 'html', 'critical', 'serve','watch');
    });