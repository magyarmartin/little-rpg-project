'use strict';

module.exports = function(app){
    app.get('/', function(req,res) {
        res.status(200).send("ok");
    });
    
    app.get('/heroes', function(req, res) {
        
    });
    
    app.post('/heroes', function(req, res) {
       res.send({id: 'ok'})
    });
};