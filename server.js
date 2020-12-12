const express = require('express');
const hbs = require('hbs');
const todoRoutes = require('./routes/todo')
const path = require('path')
const srv = express();

srv.use(express.json());
srv.use(express.urlencoded({extended: true}))

srv.set('view engine' , 'hbs');
// srv.set('views' , path.join( __dirname , 'views/basic'));

srv.use('/todos' , todoRoutes);

srv.listen(4321 , () => {
    console.log('this is starting of the server')
})