var gulp       = require('gulp');

var es         = require('event-stream');
var gutil      = require('gulp-util');

var requireDir = require('require-dir');
var tasks      = requireDir('./tasks');



// Path config
var basePaths = {
    src   : 'app/assets/',
    dest  : 'public/assets/',
    bower : 'bower_components/'
};
var paths = {
    images: {
        src: basePaths.src + 'images/',
        dest: basePaths.dest + 'images/min/'
    },
    scripts: {
        src: basePaths.src + 'js/',
        dest: basePaths.dest + 'js/min/'
    },
    styles: {
        src: basePaths.src + 'sass/',
        dest: basePaths.dest + 'css/min/'
    },
    sprite: {
        src: basePaths.src + 'sprite/*'
    }
};

// Path specific
var appFiles = {
    styles: paths.styles.src + '**/*.scss',
    scripts: [paths.scripts.src + 'scripts.js']
};
var vendorFiles = {
    styles: '',
    scripts: ''
};
var spriteConfig = {
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: paths.images.dest + 'sprite.png' // Gets put in the css
};

// General config ie: gulp --dev
var isProduction = true;
var sassStyle    = 'compressed';
var sourceMap    = false;

if(gutil.env.dev === true) {
    isProduction = false;
    sassStyle    = 'expanded';
    sourceMap    = true;
}


// TASKS
// CSS
// CSS Sprite
// Javascript/Scripts
// Default and Watch