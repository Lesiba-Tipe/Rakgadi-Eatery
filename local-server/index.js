const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000;
var cors = require('cors')
console.log('PATH:',path.resolve('../docs'))
express()
    .use(cors())
    //.use(express.static(path.join(__dirname, 'public')))
    .use(express.static(path.resolve('../docs')))
    .get('/', (req, res) => res.send('Server laoded successfully'))
    //.get('/', (req, res) => res.sendFile(path.resolve('../docs/index.html')))
    .get('/data', (req, res) => res.sendFile(path.resolve('../docs/shared/database.json')))

    .listen(PORT, () => console.log(`Listening on localhost: http://localhost:${ PORT }/`))