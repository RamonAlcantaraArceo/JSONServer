const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require("request");

const baseUrl = "https://my-json-server.typicode.com/ramon-alcantara-move/JSONServer"

describe ('JSON', function(){
    before(function(){console.log('This is the uber before once.')})
    after(function(){console.log('This is the uber after once.')})
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
    describe('Do a request', function(){
        before(function(){console.log('Before the second suite');})
        beforeEach(function(){console.log('Before each test case');})
        after(function(){console.log('After the second suite')})
        afterEach(function(){console.log('After each test case')})

        it('Dummy asking for a specific post', function(done){
            request.get({url: baseUrl + "/posts/1"},
                function(error, response, body){
                    expect(response.statusCode).to.equal(200);
                    response.statusCode.should.equal(200);

                    console.log(body);

                    expect(body).to.be.a('string');
                    body.should.be.a('string');

                    expect(body).to.include('hello');
                    body.should.include('hello')

                    expect(body).to.include('world!')
                    body.should.include('world!');

                    done();
                }
            )
        })

        it('Should validate the error code', function(done){
            request.get({url: baseUrl + "/posts/0"},
                function(error, response, body){
                    expect(response.statusCode).to.equal(404);
                    response.statusCode.should.be.equal(404);
                    done();
                }
            )
        })
    })
})