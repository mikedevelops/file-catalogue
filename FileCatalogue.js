function FileCatalogue (options, webpack) {
  this.test = options && options.test
  this.filename = options && options.filename || 'assets'
}

FileCatalogue.prototype.apply = function (compiler) {
    const test = this.test
    const name = this.filename

    compiler.plugin('emit', function (compilation, callback) {
        const assets = { assets: [] }

        for (filename in compilation.assets) {
            if (!test) assets.assets.push(filename)
            else if (filename.match(test)) assets.assets.push(filename)
        }

        compilation.assets[`${name}.json`] = {
            source: function () {
                return JSON.stringify(assets)
            },
            size: function () {
                return assets.assets.length
            }
        }

        callback()
    })
}

module.exports = FileCatalogue
