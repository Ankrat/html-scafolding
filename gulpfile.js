/**
* gulp plugins
*
*/
    var gulp    = require('gulp'),
        del     = require('del')
        rename  = require('gulp-rename'),
        fs      = require('fs');

    // GULP-PLUGINS: Tests
    // In package.json, not used in gulp

    // GULP-PLUGINS: CSS
    var sass         = require('gulp-sass'),
        sourcemaps   = require('gulp-sourcemaps'),
        minifycss    = require('gulp-cssnano'),
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
                }),
                cssstats( function(stats){
                    var projStat = require('./sources/cssStat/scripts/module/cssStatParser');
                    // Copy in sources for nunjucks to use
                    fs.writeFile('./sources/cssStat/statsData.json', JSON.stringify(projStat(stats)), function (err) {
                              if (err) throw err;
                              console.log('New stats data is saved!');
                            });
                })
            ],
        sassdoc = require('sassdoc'),
        extras = require('sassdoc-extras');

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
        minifyHTML     = require('gulp-htmlmin'),
        inject         = require('gulp-inject');

    // GULP-PLUGINS: Data - template
    var data = require('gulp-data'),
        path = require('path'); // Use to get the specific data for partials context

    // GULP-PLUGINS: Server
    var browserSync = require('browser-sync'),
        reload      = browserSync.reload;


    var filePaths = {
        site       : {
            source : ["./sources/patternlab/page/*.html"] ,
            destination : "./build/"
        },
        styleguide : {
            source : ['./sources/styles/doc-style/style.scss', './sources/styles/sg-style/style.scss'],
            destination : "./build/styleguide/styles"
        },
        sass       : {
            source : ["./sources/styles/styles.scss"] ,
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
            source : "./sources/data/data.json" ,
            destination : "./build/data"
        },
        watchFile  : {
            'html' : ['./sources/patternlab/**{,/**}/*.html'],
            'scss' : ['./sources/patternlab/**{,/**}/*.scss', './sources/styles/sass/**{,/**}/*.scss']
        }
    };
    var ports = {
        site     :8000,
        test     :8080,
        coverage :8888,
        stats    :9090,
        doc      :9999
    };

    var mocha    = require('gulp-mocha');
    var istanbul = require('gulp-istanbul')

/**
* Nunjucks setup
*
*/
    nunjucksRender.nunjucks.configure('sources/patternlab/template');
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
        // Gets .html files in pages
        return gulp.src( filePaths.site.source )
            // use data.json
            .pipe(data(function(file) {
                if( fs.existsSync(filePaths.data.source) ){
                    return require( filePaths.data.source )
                }else{
                    return;
                }
            }))
            // page-specific json
            .pipe(data(function(file) {
                var fileName = path.basename(file.path);
                fileName = fileName.substr(0, fileName.lastIndexOf('.'));

                var overwriteData = path.dirname(file.path) + fileName + '.json';

                if( fs.existsSync(overwriteData) ){
                    return require( overwriteData );
                }else{
                    return;
                }
            }))
            // Renders template with nunjucks
            .pipe(nunjucksRender())
            .pipe(minifyHTML({collapseWhitespace: true}))
            .pipe(rename({dirname: ''}))
            // output files in app folder
            .pipe(gulp.dest( filePaths.site.destination ));
    });

    // sass => {atoms, molecules, organisms}/{{elementName}}.scss /!\ order and inheritance, optimization criticalCss?
    // Example for gulp-bless:
    // gulp.task('css', function() {
    //     gulp.src('style.css')
    //         .pipe(bless())
    //         .pipe(gulp.dest('./splitCSS'));
    // });

    gulp.task('styles', function() {
        return gulp.src( filePaths.sass.source )
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
            .pipe(gulp.dest( filePaths.sass.destination ));
    });

    gulp.task('styleguide', function () {
        // Copy the Favicons
        gulp.src('./sources/images/favicons/*.png')
            .pipe(gulp.dest('./build/styleguide/favicons'));

        return gulp.src( filePaths.styleguide.source )
            .pipe(sass({
                style: 'expanded',
                errLogToConsole: true
            }))
            .pipe(postcss(processors))
            .pipe(gulp.dest( filePaths.styleguide.destination ));
    });

    gulp.task('sg-html', function() {

        // Gets .html and .nunjucks files in pages
        return gulp.src('sources/patternlab/**/sg/*.html')
            // Renders template with nunjucks
            .pipe(nunjucksRender())
            // output files in app folder
            .pipe(gulp.dest('build/styleguide/'));
    });

    // Generates styleguide
    // styleguide HTML generate
    gulp.task('sg', ['sg-html', 'styleguide'], function() {

        // gulp.on('stop', function () {
        //   process.nextTick(function () {
        //     process.exit(0);
        //   });
        // });

        return gulp.src(['./sources/styleguide/index.html'])
            .pipe(inject(gulp.src(['./build/styleguide/atom/**/*.html']),
                {
                    starttag: '<!-- inject:atom:{{ext}} -->',
                    transform: function(filepath, file) {
                        var filename = filepath.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
                        return '<section id="' + filename + '" class="container sg-container">' + '<h2 class="sg-heading" >' + filename + '</h2>' + file.contents.toString('utf8') + '</section>'
                    }
                }))
            .pipe(inject(gulp.src(['./build/styleguide/molecule/**/*.html']),
                {
                    starttag: '<!-- inject:molecule:{{ext}} -->',
                    transform: function(filepath, file) {
                        var filename = filepath.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
                        return '<section id="' + filename + '" class="container sg-container">' + '<h2 class="sg-heading" >' + filename + '</h2>' + file.contents.toString('utf8') + '</section>'
                    }
                }))
            .pipe(inject(gulp.src(['./build/styleguide/organism/**/*.html']),
                {
                    starttag: '<!-- inject:organism:{{ext}} -->',
                    transform: function(filepath, file) {
                        var filename = filepath.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
                        return '<section id="' + filename + '" class="container sg-container">' + '<h2 class="sg-heading" >' + filename + '</h2>' + file.contents.toString('utf8') + '</section>'
                    }
                }))
            .pipe(inject(gulp.src(['./build/styleguide/**/*.html'], {
                read: false
                }), {
                starttag: '<!-- inject:links -->',
                transform: function(filepath, file, i, length) {
                    var filename = filepath.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
                    return '<li><a href="#' + filename + '">' + filename + '</a></li>';
                }
            }))
            .pipe(gulp.dest('build/styleguide'));
    });


    gulp.task('sassdoc', function () {
        var options = {
                dest: './build/styleguide/sassDoc',
                verbose: true
            };
        return gulp.src('./sources/styles/**/*.scss')
            .pipe(sassdoc( options ));
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
        // del(['./build/documentation/*.html']);

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

        gulp.src('./sources/scripts/modules/**/*.js', {read: false})
            .pipe(exec('./node_modules/.bin/jsdoc -c ./jsdoc_conf.json ./sources/scripts/modules -r -d ./build/documentation', options))
            .pipe(exec.reporter(reportOptions));

        gulp.src( './sources/styles/doc-style/style.scss' )
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
            .pipe(gulp.dest( './build/documentation/styles' ));
    });



/**
* test
* /!\ npm test != gulp test
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
    gulp.task('html-stat', ['styles'], function(){
        // Add css for stats
        gulp.src( './sources/styles/stat-style/style.scss' )
            .pipe(sass({
                style: 'expanded',
                errLogToConsole: true
            }))
            .pipe(postcss(processors))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(minifycss())
            .pipe(gulp.dest( './build/reports/stats/styles' ));

        nunjucksRender.nunjucks.configure('./sources/cssStat/');

        // Copy json data to built for graph manipulation
        // Generated by style postcss-stat
        gulp.src('./sources/cssStat/statsData.json')
            .pipe(gulp.dest('./build/reports/stats'));

        return gulp.src('./sources/cssStat/statsPage/index.html')
            .pipe(data(function(file) {
                  return require('./sources/cssStat/statsData.json');
            }))
            // Renders template with nunjucks
            .pipe(nunjucksRender())
            .pipe(rename(function (path) {
                var testLess = path.dirname.replace(/\/statPage/i, '');
                path.dirname = testLess;
            }))
            // output files in app folder
            .pipe(gulp.dest('build/reports/stats'));
    });

    gulp.task('browserify-stat', function () {
        // Move the module into the build/test directory
        return gulp.src(['sources/cssStat/scripts/**/*.js', '!sources/cssStat/scripts/module/*.js'])
            .pipe(gbrowserify())
            .pipe(gulp.dest('build/reports/stats'));
    });


    gulp.task('browserify-test', function () {
        // Move the module into the build/test directory
        gulp.src(['sources/scripts/modules/**/*.js', "!sources/scripts/modules/**/test/*.js"])
        .pipe(gbrowserify())
        .pipe(gulp.dest('build/reports/tests'));

        return gulp.src(['sources/scripts/modules/**/test/*.js'])
        .pipe(gbrowserify())
        .pipe(rename(function (path) {
            var modulesLess = path.dirname.replace(/\/modules/i, '');
            var testLess = modulesLess.replace(/\/test/i, '');
            path.dirname = testLess;
            path.basename += "Test";
        }))
        .pipe(gulp.dest('build/reports/tests'));
    });

    gulp.task('pre-test', function () {
        return gulp.src(['sources/scripts/modules/**/*.js', '!sources/scripts/modules/**/test/*.js'])
        // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
    });
    gulp.task('cover-js',['pre-test'], function () {
        return gulp.src(['sources/scripts/modules/**/test/*.js'])
        .pipe(mocha())
        .pipe(istanbul.writeReports({reporters: ['html'], dir:'build/reports/coverage'} ));
    });

/**
* clean
*
*/



/**
* serve
*
*/

    // Serve test report
    gulp.task('serveTest', ['html-test', 'browserify-test'],  function(){
        // Move Mocha from node to build for browser testing
        gulp.src('./node_modules/mocha/mocha.js')
            .pipe(gulp.dest('build/reports/tests/scripts'));
        gulp.src('./node_modules/mocha/mocha.css')
            .pipe(gulp.dest('build/reports/tests/styles'));
        gulp.src('./node_modules/chai/chai.js')
            .pipe(gulp.dest('build/reports/tests/scripts'));

        // Move blanket and blanket_mocha adaptor for browser coverage
        gulp.src('./sources/scripts/thirdparty/testLib/*.js')
            .pipe(gulp.dest('build/reports/tests/scripts'));

        browserSync({
            server: {
                baseDir: 'build/reports/tests/'
            },
            port: ports.test
        });
    });

    // Serve coverage report
    gulp.task('serveCoverage',['cover-js'], function(){
        browserSync({
            server: {
                baseDir: 'build/reports/coverage/'
            },
            port: ports.coverage
        });
    });

    // Serve doc
    gulp.task('serveDoc', ['doc'], function(){
        browserSync({
            server: {
                baseDir: 'build/documentation'
            },
            port: ports.doc
        });
    });

    // Serve css stat report
    gulp.task('serveStat', ['html-stat', 'browserify-stat'],  function(){

        browserSync({
            server: {
                baseDir: 'build/reports/stats/'
            },
            port: ports.stats
        });
    });

    // Serve build
    gulp.task('serve', function(){
        browserSync({
            server: {
                baseDir: 'build/'
            },
            port: ports.site
        });

        // add browserSync.reload to the tasks array to make
        // all browsers reload AFTER tasks are complete.
        gulp.watch( ['./sources/patternlab/{,**/}*.html'], ['html-watch']);
        gulp.watch( ['./sources/patternlab/**/*.scss', './sources/styles/sass/**/*.scss'], ['css-watch']);
        gulp.watch( ['./sources/scripts/main.js'], ['js-watch']);
    });

/**
* watch
*
*/
    // Create a task that ensures the tasks are complete before
    // reloading browsers
    gulp.task('html-watch', ['html']   , reload);
    gulp.task('css-watch' , ['styles'] , reload);
    gulp.task('js-watch'  , ['scripts'], reload);



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
        gulp.start('html', 'styles', 'scripts', 'serve');
    });