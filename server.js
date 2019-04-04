const express = require('express')
const request = require('request')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/sanity', function (req, res) {
    res.send("OK")
})



app.get('/recipes/:food', function (req, res) {
    let food = req.params.food
    request(`http://www.recipepuppy.com/api/?q=${food}`, function (err, response){
    let f=JSON.parse(response.body)
    let foodies=f.results
    foodies.forEach(f=>f.ingredients = f.ingredients.split(', '))
    res.send(foodies)
    console.log(foodies)
    })
})

const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
