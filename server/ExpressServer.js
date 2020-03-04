const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send(JSON.stringify(req.body, null, 2))
  res.end(JSON.stringify(req.body, null, 2))
})

app.get('/home', function (req, res) {
  res.send('this is the main home page')
})

app.get('/about', function (req, res) {
  res.send('This is about page')
})

app.post('/about', function (req, res) {
  const v = JSON.stringify(req.body)
  console.log('request =', v, req.url )
  res.send('This is about page from post')
})

app.put('/about', function (req, res) {
  const v = JSON.stringify(req.body)
  console.log('request =', v, req.url )
  res.send('This is about page from put')
})

app.delete('/about', function (req, res) {
  const v = JSON.stringify(req.body)
  console.log('request =', v, req.url )
  res.send('This is about page from delete')
})



app.listen(5000, ()=>{
  console.log('the server is listening at port 5000')
})