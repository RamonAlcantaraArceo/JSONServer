const assert = require('chai').assert;
const expect = require('chai').expect;
var request = require("request");

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
					console.log(body);
					done();
			})
			assert.equal(true, true);
		})
	})
})