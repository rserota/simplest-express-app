var app = require('express')()

app.get('/', function(req, res){
    console.log('we are writing logs!')
    res.send("Welcome to the internet.")
})

app.listen(80)