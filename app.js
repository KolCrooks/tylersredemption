var path = require('path');
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use('/', express.static(path.join(__dirname, 'game')))
app.use('/editor', express.static(path.join(__dirname, 'editor')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))