/**
* gulp plugins
*
*/
    var gulp = require('gulp'),
        del  = require('del');

    // GULP-PLUGINS: Tests
    var mocha = require('gulp-mocha'),
        chai  = require('chai'),
        cover = require('gulp-coverage');

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
        sprite   = require('css-sprite').stream;

    // GULP-PLUGINS: JS
    var jshint      = require('gulp-jshint'),
        uglify      = require('gulp-uglify'),
        concat      = require('gulp-concat'),
        browserify  = require('browserify');

    // GULP-PLUGINS: Doc
    var exec = require('gulp-exec'); => to exec command line jsdoc

    // GULP-PLUGINS: HTML
    var nunjucksRender = require('gulp-nunjucks-render'),
        minifyHTML     = require('gulp-minify-html');

    // GULP-PLUGINS: Data - template
    var data = require('gulp-data'),
        path = require('path'); // Use to get the specific data for partials context

    // GULP-PLUGINS: Server
    var browserSync = require('browser-sync'),
        reload      = browserSync.reload;


paths = {
        site       : [
            { source : [] },
            { destination : "./site/" },
        ],
        styleguide : [
            { source : [] },
            { destination : "./site/styleguide" },
        ],
        sass       : [
            { source : [] },
            { destination : "./site/styles" },
        ],
        js         : [
            { source : [] },
            { destination : "./site/scripts" },
        ],
        images     : [
            { source : [] },
            { destination : "./site/images" },
        ],
        data       : [
            { source : [] },
            { destination : "./site/data" },
        ]
    };

/**
* Nunjucks setup
*
*/
    nunjucksRender.nunjucks.configure(['sources/templates/', 'sources/patternlab/']);
    // nunjucks-render(context)
    nunjucksRender({
        css_path: 'http://company.com/css/'}
    );
    // <link rel="stylesheet" href="{{ css_path }}test.css" />
    // would render:
    // <link rel="stylesheet" href="http://company.com/css/test.css" />



gulp.task('', function(){});



/**
* images
*
*/
    // ui-icons => generate sprite-image, generate sass mixin
    // flags    => generate sprite-image, generate sass mixin
    // favicons => optimize and move



/**
* site
*
*/
    // html => {atoms, molecules, organisms}/{{elementName}}.html, /!\ create data.json => use template engine
    // sass => {atoms, molecules, organisms}/{{elementName}}.scss /!\ order and inheritance, optimization criticalCss?
    // Example for gulp-bless:
    // gulp.task('css', function() {
    //     gulp.src('style.css')
    //         .pipe(bless())
    //         .pipe(gulp.dest('./splitCSS'));
    // });

    // js   => browserify modules in main.js, jshint main.js, move third-party, generate polyfill
    //         [ browserify, jshint, third-party, polyfill ]



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
    // html
    // sass
    // js



/**
* test npm test != gulp /!\
*
*/
    // html
    // sass => cssstats
    // js   => mocha, cover


/**
* clean
*
*/



/**
* serve
*
*/



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

    gulp.task('default', ['clean'], function() {
        gulp.start('html', 'styles', 'scripts', 'serve', 'watch');
        // gulp.start('styles', 'scripts', 'polyfill', 'images', 'html', 'critical', 'serve','watch');
    });