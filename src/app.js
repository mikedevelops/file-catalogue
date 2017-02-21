const request = function (file) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest()

        req.open('GET', file)
        req.send()
        req.addEventListener('load', resolve)
        req.addEventListener('error', reject)
    })
}

const image1 = require('./images/image_1.jpg')
const image2 = require('./images/image_2.png')
const image3 = require('./images/image_3.png')

function cacheImages (images) {
    images.forEach(image => {
        const img = new Image()
        img.src = image
    })

    console.log('images cached!')
}

request('assets.json')
.then(res => {
    const files = JSON.parse(res.target.response).assets
    cacheImages(files)
})
.catch(err => console.log(err))
