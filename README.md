# Angular ES6 Webpack App

Includes following:

 - [Webpack 4](https://webpack.js.org/) (modules, assets bundling)
 - [babel](http://babeljs.io/) (ES2015 support)
 - [jest](https://jestjs.io/) Jest for unit tests
 - [node-sass](https://github.com/sass/node-sass) for styles + AutoPrefixer
 - ngdocs with grunt (This is the only task running in grunt, because there are no better alternatives)


Requirements:

- NodeJS 6+ is required.

### Usage

* Install dependencies `npm i`
* Start dev server with HMR `npm start`
* Lint your js code `npm run lint`
* Lint your scss code `npm run stylelint`
* Run unit tests `npm run test`
* Run unit test in watch mode `npm run test:watch`
* Run unit test only for local changed files `npm run test:local`
* Run unit test coverage `npm run test:coverage`
* Create build for testing `npm run build:dev` for development build
* Create build for deployment `npm run build:prod` for production build
* Run the docs `npm run docs` will create an http server and make it ready to visit
* Run the docs with watcher for js, html, and scss files `npm run watch-docs` will create an http server and make it ready to visit

---

### Directory layout

    ├── dist                 # bundle destination
    ├── config               # webpack build helpers
    ├── node_modules         # app dependencies
    └── src                  # app sources
        ├── assets           # app assets
        ├── config           # angular app config options
        ├── components       # all the components go here
        ├── pages            # all the pages with route associated go here
        ├── index.module.js  # app entry module
        ├── index.run.js     # app entry file
        └── dependencies.js  # app dependencies imports

### Styleguide

#### For JS
Using airbnb styleguide as an extension for eslint

#### For SCSS
Using config-standard set up for Stylelint

### Formatting
Using prettier to format code.
It's recommended to set up to format on save. For this to work, it's needed to add prettier
extension to your IDE and set it up to format on save.

#### For VSC IDE

VSC user can do this by adding the following in the User Settings json file:

```
"editor.formatOnSave": false,
"[javascript]": {
  "editor.formatOnSave": true,
},
"prettier.requireConfig": true
```

(The last line will make format on save to only trigger when current project has prettierrc file)
