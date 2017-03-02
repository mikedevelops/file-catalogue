# File Catalogue

Create a JSON file within your build directory with an array of files passed through the Webpack compiler.

### Installation

`npm install mikedevelops/file-catalogue`

### Usage

_assets/_
```
| assets
  - foo.jpg
  - bar.png
```

_webpack.config.js_
 ```javascript
const FileCatalogue  = require('file-catalogue')

module.exports = {
  // ... your config

  plugins: [
    new FileCatalogue({
      filename: 'assets',
      test: /\.(jpg|png)$/
    })
  ]
}
 ```

 _assets.json_
 ```javascript
 {"assets":["foo.jpg","bar.png"]}
 ```

### Options

----

`filename: [string] | default: assets.json`

The name of the output catalogue file. Directories will be resolved, `bar/foo` will place `foo.json` in a directory named `bar` within the build directory.

----

`test: [RegExp]`

A regular expression to be run against each file that passes through the Webpack compiler. If no test is provided all files will be pushed to the catalogue.

----

### What problem does this solve?

This plugin was created to solve a problem with pre-loading and caching assets on a native iOS app (built with Phonegap). Unlike the web, I was unable to access a directories contents with a XHR request.

Building this plugin allowed me to request the catalogue file with a XHR request, parse, then preload and cache each asset on the device.
