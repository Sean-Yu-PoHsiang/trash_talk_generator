
//require node modules
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

//require function
const generateTrashTalk = require('./generateTrashTalk')

//set port
const port = 3000

//set view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set index route
app.get('/', (req, res) => {
  res.render('index')
})

//set respond route
app.post('/', (req, res) => {
  const option = req.body
  const trashTalk = generateTrashTalk(option)
  const result = {
    engineer: option.person === 'engineer',
    designer: option.person === 'designer',
    founder: option.person === 'founder'
  }
  res.render('index', { trashTalk: trashTalk, result: result })
})

// set server listener
app.listen(port, () => {
  console.log('trashTalk generator server start success!')
})