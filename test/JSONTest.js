const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require("request");

const baseUrl = "https://my-json-server.typicode.com/ramon-alcantara-move/JSONServer"

describe ('JSON', function(){
    describe('Dummy', function(){
        it('Dummy should assert for fun', function(){
            assert.equal(false, false);
        })
        it('Dummy asking for a url', function(done){
            request.get({url: baseUrl + "/posts"}, 
                function (error, response, body){
                    expect(response.statusCode).to.equal(200);
                    // How do I make this output optional.
                    //console.log(body);
                    done();
                }
            )
            assert.equal(true, true);
        })
        
        it('Dummy asking for a specific post', function(done){
            request.get({url: baseUrl + "/posts/1"},
                function(error, response, body){
                    expect(response.statusCode).to.equal(200);
                    done();
                }
            )
        })

        it('Dummy asking for a non existing post', function(done){
            request.get({url: baseUrl + "/posts/0"},
                function(error, response, body){
                    expect(response.statusCode).to.equal(404);
                    done();
                }
            )
        })
    })
})