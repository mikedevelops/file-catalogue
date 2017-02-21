function FileCatalogue (options) {}

FileCatalogue.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        const assets = { assets: [] }

        for (filename in compilation.assets) {
            if (filename.match(/.jpg/) || filename.match(/.png/)) {
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
