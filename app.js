var app = require('express')()

app.get('/', function(req, res){
    res.send("Welcome to the internet.")
})

app.listen(80)