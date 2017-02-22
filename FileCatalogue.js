function FileCatalogue (options, webpack) {
  this.test = options.test
}

FileCatalogue.prototype.apply = function (compiler) {
    const test = this.test

    compiler.plugin('emit', function (compilation, callback) {
        const assets = { assets: [] }

        for (filename in compilation.assets) {
            if (filename.match(test)) {
                assets.assets.push(filename)
            }
        }

        compilation.assets['assets.json'] = {
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
