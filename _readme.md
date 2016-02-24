## Project's dependencies ##

 ... A lot in gulp and npm ;)

 See package.json


## Project Setup ##

1. Install [Node.js](https://nodejs.org/download)
2. Run ( from the /frontend folder ) :

    ```
    $ npm install
    ```



## Default ##

```$ gulp```


This will generate the HTML, css and javascript then create a node server and serve files from ./frontend/statics [localhost:8000](http://localhost:8000). This is the default task.


```$ gulp clean-site```


This will remove all "site" related files and folders:

- ./statics/*.html
- ./statics/styles/
- ./statics/scripts/
- ./statics/maps/ { for dev only => source mapping }


>There is a ```$ gulp clean``` task which empty the ./frontend/statics folder
***



## copyAssets ##

```$ gulp copyAssets```


This will copy the assets from ./sources to ./statics

- ./statics/data/
- ./statics/fonts/
- ./statics/images/


***




## JS Documentation ##

```$ gulp serveDoc```


This will generate the HTML, css and javascript for the javascript documentation and serve files from ./frontend/documentation [localhost:9999](http://localhost:9999)

See [JSDoc](http://usejsdoc.org/) for documentation on how to mark your javascript.

```$ gulp clean-doc```

Will empty the ./statics/documentation folder

***




## JS Tests ##

```$ gulp serveTest```


This will generate the HTML, css and javascript for the javascript tests and serve files from ./frontend/statics/reports/tests [localhost:8080](http://localhost:8080)


```$ gulp clean-test```


Will empty the ./statics/reports/tests/ folder


```$ gulp serveCoverage```


This will generate the HTML, css and javascript to show the coverage of the javascript module by the tests and serve files from ./statics/reports/coverage/ [localhost:81](http://localhost:81)

***





## Styleguide ##

```$ gulp sg```


This will generate the HTML, css for the styleguide.[localhost:8000/styleguide](http://localhost:8000/styleguide)


>Note that after having generated the styleguide HTML, you will need to run ```$ gulp``` in parallel to see it and have access to [localhost:8000/styleguide](http://localhost:8000/styleguide)


```$ gulp clean-sg```


This will empty the ./statics/styleguide/ folder

***




## CSS stats ##

```$ gulp serveStats```


This will generate the HTML, css, javascript to display some statistics from the styles.css .[localhost:8888](http://localhost:8888)


```$ gulp clean-stats```


This will empty the ./statics/reports/stats/ folder

***




## Data ##

``` $ gulp data ```


Will generate the ```./frontend/sources/data/data.json```, It concatenate all the ```*.json``` in the data folder to one data.json . This json file is used to populate the pages by the template engine.


>Note: You'll need to run this command at least once then re-rerun ``` $ gulp ```




## Templates... ##

The templates are stored in the ```./frontend/sources/patternlab/templates```.

1. base
2. styleguide_base

>They are the backbones of any HTML pages.


The pages to build are in ```./frontend/sources/patternlab/pages```, and inherits from a template.

They are in folders for grouping (i.e.: ```accounts/``` will hold ```profile.html```, ```login.html``` ... )

These pages are build with bricks of "*organism* which in turn are made of *molecule* which come from *atom* ..." That's the logic behind.

The data used to populate this pages comes from the ```./frontend/sources/data/data.json``` file (see Data above)


I am using  Django like template engine called [Nunjuck](https://mozilla.github.io/nunjucks/templating.html).



## Further note... ##

There are 2 default branches:

- master
- release


TODO: integrate Jenkis, JIRA.


We should have a branch per dev/feature to merge in master.
Master should be tested (Jenkins?) before merging to release.

You'll find, in the frontend, a ```.snyk``` file. You can have a look [here](https://snyk.io/) to see how snyk works. But in a nutshell, it checks and fix known vulnerabilities in Node.js dependencies...

*** Need to be run after every npm/npm-dependencies update. ***