const express = require('express')
const app = express()

app.use(express.static('www'))

app.get('/', function (req, res) {
    res.sendFile('index.html')
})

app.listen(3000, function () {
    console.log('listening on 3000')
})
