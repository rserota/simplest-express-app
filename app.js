var app = require('express')()

app.get('/', function(req, res){
    console.log('we are writing logs!')
    res.send("Welcome to the INTERWEBZ.")
})

app.listen(80)
