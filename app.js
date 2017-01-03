var app = require('express')()

app.get('/', function(req, res){
    console.log('we are writing logs!')
    res.send("It's all just a series of tubes.")
})

app.listen(80)
