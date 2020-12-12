const route = require('express').Router();
// route.get('/' , (req , res) => {
//     res.send('hi this is me')
// })
route.get('/' , (req , res) => {
    if(req.query.user != null && req.query.email != null){
        res.render('demo' , {
            name: req.query.user,
            email: req.query.email
        })
    }else{
        res.render('index')
    }
})
route.post('/' , (req , res) => {
    res.render('demo' , {
        name: req.body.user1,
        email: req.body.email1
    })
})
module.exports = route;