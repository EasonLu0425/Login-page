const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.engine('hbs', exphbs({defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port ,() =>{
  console.log(`The web is on localhost:${port}`)
})