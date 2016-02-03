    Templating engine Nunjuks
    PatternLab organisation
        => HTML / scss in the same folder

    Sass and Susy
    Generate sassDoc
    Generate CSS stats
    Styleguide / Visual library Generated

    JS require/browserify => module pattern
    Generate JSDoc
    Mocha test the js
    Coverage report

    Gulp task manager

## Tasks

- *sprites*:

 Generate sprite.png and _sprite.scss

    ```
    $ gulp sprites
    ```

- *html*:

 Build pages from patternlab

 Compile with Nunjucks and data

    ```
    $ gulp html
    ```

- *styles*:

 Build style.css from `sources/styles/style.scss`

 via @import

    ```
    $ gulp styles
    ```

- *styleguide*:

 Build the visual style of each patternlab

    ```
    $ gulp styleguide
    ```

- *sg-html*:

 Build the `index.html` by injecting the html of each components

    ```
    $ gulp sg-html
    ```

- *sg*:

 Aliase which run `styleguide` then `sg-html` gulp tasks

    ```
    $ gulp sg
    ```

- *sassdoc*:

 Build documentation for sass mixins and functions

    ```
    $ gulp sassdoc
    ```

- *lint-js*:

 Lint the js modules

    ```
    $ gulp lint-js
    ```

- *browserify-js*:

 Bundle the js

    ```
    $ gulp browserify-js
    ```

- *scripts*:

 Bundle and minify the thirdparty and modules

    ```
    $ gulp scripts
    ```

- *doc*:

 Build documentation for js modules

    ```
    $ gulp doc
    ```

- *html-test*:

 Generate the html to run js tests

    ```
    $ gulp html-test
    ```

- *html-stat*:

 Generate the html to run/display css stat

    ```
    $ gulp html-stat
    ```

- *browserify-stat*:

 Bundle javascript for css stats (charts creation)

    ```
    $ gulp browserify-stat
    ```

- *browserify-test*:

 Bundle js for tests runner and library

    ```
    $ gulp browserify-test
    ```

 ```
 TODO: Issues with `gbrowserify` when more than 1 module?!
 ```

- *pre-test cover-js*:

 Generate test coverage report

    ```
    $ gulp pre-test
    ```

    ```
    $ gulp cover-js
    ```


**Serve tasks**

- *serveTest*:


    ```
    $ gulp serveTest
    ```

- *serveCoverage*:


    ```
    $ gulp serveCoverage
    ```

- *serveDoc*:


    ```
    $ gulp serveDoc
    ```

- *serveStat*:


    ```
    $ gulp serveStat
    ```

- *serve*:


    ```
    $ gulp serve
    ```


**Watch tasks**

- *html-watch*:


    ```
    $ gulp html-watch
    ```

- *css-watch*:


    ```
    $ gulp css-watch
    ```

- *js-watch*:


    ```
    $ gulp js-watch
    ```

- *default*:


    ```
    $ gulp default
    ```