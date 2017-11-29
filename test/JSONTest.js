const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require("request");

const baseUrl = "https://my-json-server.typicode.com/ramon-alcantara-move/JSONServer"


describe ('JSON', function(){
    var response;
    var error;
    var body;
    function DoTheRequest(postId, done){
        var options = {
            url: baseUrl + "/posts/" + postId
        }
        request.get(options,
            function(_error, _response, _body){
                error = _error;
                response = _response;
                body = _body;
                done();
            }
        )
    }

    // this is our global timeout for get requests.
    // 600 makes it fleaky
    var getTimeout = this.timeout(1000);

    before(function(){console.log('This is the uber before once.')})
    after(function(){console.log('This is the uber after once.')})
    describe('Dummy', function(){
        before(function(){console.log('Before the second suite');})
        beforeEach(function(){console.log('Before each test case');})
        after(function(){console.log('After the second suite')})
        afterEach(function(){console.log('After each test case')})
        it('Dummy should assert for fun', function(){
            assert.equal(false, false);
        })
        it('Dummy should assert for fun again', function(){
            assert.equal(false, false);
        })
    })

    describe('Get', function(){
        
        before(() => {
        })
        beforeEach(function(){

        })
        after(function(){
            
        })
        afterEach(function(){
            
        })

        describe('Post 0', () => {
            before((done) => {
                getTimeout;
                DoTheRequest(0, done);
            })
            it('Response should be 404',function(){
                response.statusCode.should.equal(404);
            })
            it('Body should be a string', function(){
                body.should.be.a('string');
            })
            it('Body shold not include \'hello world!\'', function(){
                body.should.not.include('hello world!');
            })

            it('Response expect to be equal 404',function(){
                expect(response.statusCode).to.be.equal(404);
            })
            it('Body expect be a string', function(){
                expect(body).to.be.a('string');
            })
            it('Body expect not include \'hello world!\'', function(){
                expect(body).to.not.include('hello world!');
            })
        });
        describe('Post 1', () => {
            before(function(done){
                getTimeout;
                DoTheRequest(1, done);
            })
            it('Response should be 200',function(){
                response.statusCode.should.equal(200);
            })
            it('Body should be a string', function(){
                body.should.be.a('string');
            })
            it('Body should include \'hello world!\'', function(){
                body.should.include('hello world!');
            })

            it('Response expect to be 200');
            it('Body expect to be a string');
            it('Body expect to include \'hello world!\'')
        });
        
    })
})