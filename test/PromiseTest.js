
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const request = require("request");

const baseUrl = "https://my-json-server.typicode.com/ramon-alcantara-move/JSONServer"

const testTimeout = 2000;
const testDelay = 300

describe('Promise learning', () => {
    describe('The first promise', () => {
        it('A simple positive case', () => {
            const wait = time => new Promise((resolve) => {
                setTimeout(resolve, time);
            });
            return wait(testDelay).then(() => assert.isTrue(true), () =>  assert.isTrue(false) );
        }).timeout(testTimeout);
    });

    describe('The second promise', function TheSecondDescribe() {
        it('A more elaborate promise that can fail', () => {
            this.timeout(testTimeout);
            const wait = time => new Promise(function(resolve,reject) {
                assert.isTrue(false);
            });
            
            return wait(testDelay).then(() => {
                assert.isFalse(true);
            },(e) => {
                assert.isDefined(e)
            });
        });

        it('A more elaborate promise that can fail, slightly different', () => {
            this.timeout(testTimeout);
            const wait = time => new Promise(function(resolve,reject) {
                setTimeout(reject("I just wanted to reject this"), time);
            });
            
            return wait(testDelay).then(() => {
                assert.isFalse(true);
            },(e) => {
                console.log(e);
                assert.isDefined(e)
            });
        });
    });
});