
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require("request");

const myBaseUrl = "http://localhost:8000/v1/";

function DoRETSRequest(_baseUrl, done, expectedStatusCode){
    var options = {
        url: baseUrl = _baseUrl
    }
    request.get(options,
        function(_error, _response, _body){
            error = _error;
            response = _response;
            body = _body;
            response.statusCode.should.equal(expectedStatusCode)
            done();
        }
    )
}

describe('RETS', function(){
    describe('Users', function(){
        it('A query on users on the local data base', function(done) {
            DoRETSRequest(myBaseUrl + "rets-users", done, 200)
        })

        it('A query on users on the local data base not found', function(done) {
            DoRETSRequest(myBaseUrl + "rets-userz", done, 404)
        })
    })
})