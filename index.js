const express = require('express')
app = express()
app.get("/",function(req, re){
    res.send("hello world")
})