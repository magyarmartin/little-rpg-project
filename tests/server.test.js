var expect = require("chai").expect;
var request = require("supertest");
var heroes = require("../routes/heroes");

describe('server', function() {
    var server;
    beforeEach(function(){
        server = require("../server.js");
    });
    
    afterEach(function(){
        server.close();
    });
    
    describe('GET /heroes', function() {
        
        it('should responde a json to get request', function testSlash(done) {
            request(server)
            .get('/heroes')
            .expect('Content-Type', /json/)
            .end(done);
        });
    });
        
    describe('POST /heroes', function(){
        var postData;
        
        before(function(){
            postData = {
                type: 'warrior',
                hp: 30,
                weapon: 'sword'
            };
        });
        
        it('should responde a json to post request', function testSlash(done) {
            request(server)
            .post('/heroes')
            .send(postData)
            .expect('Content-Type', /json/)
            .end(done);
        });
        
        after(function(){
            heroes.deleteHeroes();
        });
    });
    
    describe('GET battle', function() {
        var postData;
        
        before(function(){
            postData = {
                type: 'warrior',
                hp: 30,
                weapon: 'sword'
            };
        });
        
        it('should responde a json to get request', function testSlash(done) {
            
            var firstHeroId = heroes.createCharacter({ type: 'warrior', hp: 30});
            var secondHeroId = heroes.createCharacter({ type: 'priest', hp: 30, weapon: 'sword'});
            
            request(server)
            .get('/battle?hero1=' + firstHeroId + '&hero2=' + secondHeroId )
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if (err) {
                    console.log(err);
                    return done(err);
                }
                done();
              });
        });
        
        after(function(){
            heroes.deleteHeroes();
        });
        
    });
    
    
})