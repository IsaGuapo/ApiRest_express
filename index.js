const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.set('view engine', 'pug');
app.set('views','./views');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

/***********Enrutamiento *********** */
app.get('/', (req, res) => {
    res.render('home')
  })


app.get('/films', (req, res) => {
    res.render('films')
    })

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})