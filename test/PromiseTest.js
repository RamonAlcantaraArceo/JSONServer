
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require("request");

const baseUrl = "https://my-json-server.typicode.com/ramon-alcantara-move/JSONServer"

const testTimeout = 2000;
const testDelay = 300

describe('Promise learning', () => {
    describe('The first promise', () => {
        it('A simple positive case', (done) => {
            const wait = time => new Promise((resolve) => {
                setTimeout(resolve, time);
            });
            wait(testDelay).then(() => {
                console.log('Hello!');
                done();
            });
        }).timeout(testTimeout);
    });

    describe('The second promise', function TheSecondDescribe() {
        it('A more elaborate promise that can fail', function(done) {
            this.timeout(testTimeout);
            const wait = time => new Promise(function(resolve,reject) {
                assert.isTrue(false);
            });
            
            wait(testDelay).then(() => {
                console.log('Hello!');
                done("This should not have been invoked");
            },(e) => {
                console.log(e);
                // commenting the error parameter to allow the test to pass.
                done(/*e*/);
            });
        });

        it('A more elaborate promise that can fail, slightly different', function(done) {
            this.timeout(testTimeout);
            const wait = time => new Promise(function(resolve,reject) {
                setTimeout(reject("I just wanted to reject this"), time);
            });
            
            wait(testDelay).then(() => {
                console.log('Hello!');
                done("This should not have been invoked");
            },(e) => {
                console.log(e);
                // commenting the error parameter to allow the test to pass.
                done(/*e*/);
            });
        });
    });
});