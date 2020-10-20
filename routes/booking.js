var express = require('express')
var fs = require('fs')
var router = express.Router()

router.get('/', function(req, res, next){
    res.render('booking', {title: 'booking'})
})

router.post('/sucess', function(req, res, next){
    fs.readFile("./public/data/combined.json", function(err, data){
        if(err){
            console.log(err.message)
            return
        }
        let json = JSON.parse(data)
        let NumOfP = req.body.NumOfP
        let type = req.body.type

        json.cars.push({"NumOfP": NumOfP, "type": type})

        fs.writeFile("./public/data/combined.json", JSON.stringify(json, null, 4), function(err){
            if(err){
                console.log(err.message)
            }

        })
    })
    res.render('sucess', {title: 'sucess'})
})
module.exports = router