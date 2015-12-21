'use strict';

var post = process.env.PORT || 8080;
var host = process.env.IP;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var heroes = require("./routes/heroes");
var routes = require('./routes/index');
var battle = require("./routes/battle");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/heroes', function(req, res) {
    var characters = heroes.getCharacters(req);
    res.status(200).send(characters);
});

app.post('/heroes', function(req, res) {
    var characterDetails = {
        type: req.body.type,
        hp: req.body.hp,
        weapon: req.body.weapon
    };
    var newCharacterId = heroes.createCharacter(characterDetails, req);
    res.status(200).send({id: newCharacterId});
});

app.get('/battle/', function(req, res) {
    var firstHeroId = parseFloat(req.query.hero1);
    var secondHeroId = parseFloat(req.query.hero2);
    res.status(200).send({winnerId: battle(firstHeroId, secondHeroId)});
})

app.get('/character', function(req, res){
    var hero = heroes.getCharacter(parseFloat(req.query.id));
    console.log(req.query);
    console.log(hero);
    res.status(200).send({'hero1': hero});
})

//var routes = require("./controllers/routes.js")(app);

var server = app.listen(post, host);
module.exports = server;